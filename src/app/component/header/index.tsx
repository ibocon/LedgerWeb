// module
import React from 'react';
import styled from 'styled-components';
import { Layout } from 'antd';
// source
import { CollapseMenu } from './CollapseMenu';
// style
const StyledHeader = styled(Layout.Header)`
    padding: 0;
    background: #ffffff;
`;
// component
export function Header() {
  return (
    <StyledHeader>
        <CollapseMenu />
    </StyledHeader>
  );
};
export default Header;