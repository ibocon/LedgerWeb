/*
 * All Rights Reserved
 * Copyright (c) 2021 Yegun Kim
 * Created by Yegun Kim (wlfka102@gmail.com)
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

// module
import React, { forwardRef } from 'react';
import classNames from 'classnames';
// style
import style from './Button.scss';
// type
import { ButtonProps } from './ButtonProps';
// component
export const Button: React.FunctionComponent<ButtonProps> = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  // Destructuring 으로 Button 에게 전달된 props 를 변수에 할당하면서 기본값도 결정한다. 
  const { 
    children = undefined,
    size = 'middle',
    shape = 'rectangle',
    onClick = null,
  } = props;

  const [coords, setCoords] = React.useState({ x: -1, y: -1});
  const [isRippling, setIsRippling] = React.useState(false);

  const buttonClassName = classNames(
    style.base,
    {[`${style.small}`]: size === 'small', [`${style.large}`]: size === 'large', },
    {[`${style.circle}`]: shape === 'circle',}
  );

  // button 을 click 해서 좌표가 변경되면 ripple 을 시작한다.
  React.useEffect(() => {
    if (coords.x !== -1 && coords.y !== -1) {
      setIsRippling(true);
      // 일정 시간이 지나면 ripple 효과를 제거한다.
      setTimeout(() => setIsRippling(false), 300);
    } else {
      setIsRippling(false);
    }
  }, [coords]);

  // button 의 ripple 효과가 사라지면 좌표를 초기화한다.
  React.useEffect(() => {
    if(!isRippling)
      setCoords({x: -1, y: -1});
  }, [isRippling]);

  const handleClick  = (e : React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    // target 은 이벤트가 발생한 객체지만, currentTarget 은 event handler 가 붙은 객체다.
    // https://github.com/facebook/react/issues/5733
    const rect = (e.target as HTMLElement).getBoundingClientRect();
    // ripple 효과가 시작할 위치 값으로 coords 를 변경한다.
    setCoords({x: e.clientX - rect.left, y:e.clientY - rect.top});

    // component 로 주입된 onClick 메서드를 실행한다.
    if(onClick)
      onClick(e);
  };

  return (
    <button type='button' ref={ref} className={buttonClassName} onClick={handleClick}>
      { isRippling && <span className={`${style.ripple}`} style= {{left: coords.x, top: coords.y}} /> }
      { children }
    </button>
  );
});

export default Button;