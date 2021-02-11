// module
import React from 'react';
import styled from 'styled-components';
import { Layout, Button } from 'antd';
// source
import { SiderCollapseButton } from './SiderCollapseButton';
// style
const StyledHeader = styled(Layout.Header)`
    padding: 0;
    background: rgb(255, 255, 255);
    opacity: 90%;
`;
const StyledLogoutButton = styled(Button)`
  float: right;
  font-size: 12px;
  height: 44px;
  margin: 10px 12px;
`;
// component
export function Header() {
  return (
    <StyledHeader>
        <SiderCollapseButton />
        <StyledLogoutButton type="text" danger>Logout</StyledLogoutButton>
    </StyledHeader>
  );
};
export default Header;