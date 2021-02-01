// module
import { Menu } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
// source
// component
export function UserMenu(props : {}) {
    return(
        <React.Fragment>

            <Menu.Item { ...props }>
                <Link to="/user/login">Login</Link>
            </Menu.Item>

        </React.Fragment>
    );
}
export default UserMenu;
// https://stackoverflow.com/questions/50573609/fail-creating-a-submenu-in-a-component-with-antd