// module
import React from 'react';
import classNames from 'classnames';
// style
import * as style from './style';
// type
type ButtonShape = 'circle' | 'round';
interface ButtonProps {
    shape?: ButtonShape;
    icon?: React.ReactNode;
    size?: style.globalStyle.SizeType;
};
// component
const Button : React.FunctionComponent<ButtonProps> = (props : ButtonProps) => {
    const { 
        shape, 
        icon, 
        size,
    } = props;

    const className = classNames(
        style.buttnPrefix,
        {
            [`${style.buttnPrefix}-${shape}`]: shape,
        }
    );

    return(
        <button className={ className } >

        </button>
    );
};

export default Button;