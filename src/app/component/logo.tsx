// module
import React from 'react';
import styled from 'styled-components';
// file
import logo from 'src/res/logo.svg';
import { useHistory } from 'react-router-dom';
// style
const StyledLogo = styled.img`
    width: 128px;
    height: 60px;
    alt: "Ledger application's logo";
`;
// component
export const Logo = (props : { width?: number | string,  height?: number | string}) => {
    const history = useHistory();
    const onLogoClicked = () => {
        history.push('/');
    };

    return (
        <StyledLogo 
            src={logo} 
            style={{ 
                width: props.width,
                height: props.height
            }}
            onClick={onLogoClicked} />
    );
};
export default Logo;