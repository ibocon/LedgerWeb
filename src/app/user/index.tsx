// Modules
import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Layout } from 'antd';

// Styles

// Component
const FuncComponent : React.FC = props => {
    return(
        <Switch>
            <Route path="/user/login">
                <Link to="/">Login</Link>
            </Route>
            <Route path="/user/signup">
                <Link to="/">Signup</Link>
            </Route>
        </Switch>
    );
}
export const UserPage = FuncComponent;
export default UserPage;