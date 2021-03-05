// module
import React from 'react';
import classNames from 'classnames';
// style
import style from './Button.scss';
// type
type ButtonSizeType = 'small' | 'middle' | 'large' | undefined;
interface ButtonProps {
    children?: React.ReactNode;
    size?: ButtonSizeType;
};
// component
export const Button : React.FunctionComponent<ButtonProps> = (props : ButtonProps) => {
    const { 
        children,
        size,
    } = props;

    const className = classNames(
        style.base,
        {
            [`${style.small}`]: size === 'small',
            [`${style.large}`]: size === 'large',
        },
    );

    return(
        <button className={ className } >
            { children }
        </button>
    );
};

export default Button;