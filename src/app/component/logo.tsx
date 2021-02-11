// module
import React from 'react';
import styled from 'styled-components';
// file
import logo from 'src/res/logo.svg';
// style
const StyledLogo = styled.img`
    width: 128px;
    height: 60px;
    alt: "Ledger application's logo";
`;
// component
export function Logo(props : { width?: number | string,  height?: number | string}) {
  return (
    <StyledLogo 
      src={logo} 
      style={{ 
        width: props.width,
        height: props.height
      }} />
  );
};
export default Logo;