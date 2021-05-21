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
  } = props;

  const className = classNames(style.base, {
    [`${style.small}`]: size === 'small',
    [`${style.large}`]: size === 'large',
  }, {
    [`${style.circle}`]: shape === 'circle',
  });

  return (
    <button type='button' ref={ref} className={className}>
      {children}
    </button>
  );
});

export default Button;