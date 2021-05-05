// module
import React from "react";
import { Switch, Route } from "react-router-dom";
import styled from "styled-components";
import { Layout } from "antd";
// source
import { BreakPointType } from "@ledger-component/styled";
import { Login } from "./Login";
import { Signup } from "./Signup";
import { Recovery } from "./Recovery";
// style
const VerticalContainer = styled(Layout)`
  // layout
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (max-width: ${BreakPointType.Small}px) {
    justify-content: flex-start;
    align-items: flex-start;
  }
`;
const Bumper = styled.div`
  min-height: 30px;
  @media (max-width: ${BreakPointType.Small}px) {
    display: none;
  }
`;
const HorizontalContainer = styled(Layout)`
  // layout
  display: flex;
  flex-direction: column;
  align-items: center;
`;
// component
export function UserPage() {
  return (
    <VerticalContainer>
      <HorizontalContainer>
        <Bumper />
        <Switch>
          <Route path="/user/login">
            <Login />
          </Route>
          <Route path="/user/signup">
            <Signup />
          </Route>
          <Route path="/user/recovery">
            <Recovery />
          </Route>
        </Switch>
      </HorizontalContainer>
    </VerticalContainer>
  );
}
export default UserPage;
