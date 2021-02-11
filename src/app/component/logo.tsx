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
export function Logo(props : {}) {
  return (
    <StyledLogo src={logo} />
  );
};
export default Logo;