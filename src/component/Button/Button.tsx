// module
import React from 'react';
import classNames from 'classnames';
// style
import style from './Button.scss';
// type
type ButtonTheme = 'white' | 'dark';
interface ButtonProps {
    theme?: ButtonTheme;
};
// component
export const Button : React.FunctionComponent<ButtonProps> = (props : ButtonProps) => {
    const { 
        theme,
    } = props;

    const className = classNames(
        style.classPrefix,
        {
            [`${style.whiteTheme}`]: theme === 'white',
            [`${style.darkTheme}`]: theme === 'dark',
        }
    );

    return(
        <button className={ className } >

        </button>
    );
};

export default Button;