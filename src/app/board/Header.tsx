// module
import React from 'react';
import styled from 'styled-components';
import { Layout, Button } from 'antd';
// source
import { SiderCollapseButton } from './SiderCollapseButton';
import { logout, useAppDispatch } from 'src/app/feature';
import { useHistory } from 'react-router-dom';
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
  const history = useHistory();
  const dispatch = useAppDispatch();
  const OnLogoutButtonClicked = () => {
    dispatch(logout());
    history.push('/user/login');
  };

  return (
    <StyledHeader>
      <SiderCollapseButton />
      <StyledLogoutButton 
        type="text" 
        danger
        onClick={OnLogoutButtonClicked}>
        Logout
      </StyledLogoutButton>
    </StyledHeader>
  );
};
export default Header;