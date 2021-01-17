// module
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import { Layout } from 'antd';
// source
import { BreakPoint } from 'src/app/component/styled';
import Login from './Login';
import Signup from './Signup';
import Recovery from './Recovery';
// style
const VerticalContainer = styled(Layout)`
    // layout
    display: flex;
    flex-direction: row;
    align-items: center;
    @media(max-width: ${BreakPoint.Small}px) {
        justify-content: flex-start;
        align-items: flex-start;
    }
`;
const Bumper = styled.div`
    min-height: 30px;
    @media(max-width: ${BreakPoint.Small}px) {
        display: none;
    }
`;
const HorizontalContainer = styled(Layout)`
    // layout
    display: flex;
    flex-direction: column;
    align-items: center;
`;
// type
export type UserPageProps = {

}
// component
export function UserPage(props : UserPageProps) {
    return(
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
    )
}
export default UserPage;