// module
import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
// type
export type UserPageProps = {

}
// component
export function UserPage(props : UserPageProps) {
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
export default UserPage;