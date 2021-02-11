// module
import React from 'react';
import styled from 'styled-components';
import { Layout } from 'antd';
// source
import { SiderCollapseButton } from './SiderCollapseButton';
// style
const StyledHeader = styled(Layout.Header)`
    padding: 0;
    background: #ffffff;
`;
// component
export function Header() {
  return (
    <StyledHeader>
        <SiderCollapseButton />
    </StyledHeader>
  );
};
export default Header;