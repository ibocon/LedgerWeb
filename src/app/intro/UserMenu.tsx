// module
import { Menu } from 'antd';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// source
import { BreakPoint } from 'src/component';
// type
export type UserMenuProps = {

}
// component
export function UserMenu(props : UserMenuProps) {
    const [collapsed, setCollapsed] = useState(false);

    useEffect(() => {
        window.addEventListener("resize", onResized);
        return () => window.removeEventListener("resize", onResized);
    });

    function onResized() {
        if(window.innerWidth < BreakPoint.Medium)
            setCollapsed(true);
        else
            setCollapsed(false);
    }

    return(
        <React.Fragment>
            <Menu.Item { ...props } style={{ float: 'right' }}>
                <Link to="/user/login">Login</Link>
            </Menu.Item>
        {!collapsed &&
            <Menu.Item { ...props } style={{ float: 'right' }}>
                <Link to="/user/signup">Signup</Link>
            </Menu.Item>
        }
        </React.Fragment>
    );
}
export default UserMenu;
// https://stackoverflow.com/questions/50573609/fail-creating-a-submenu-in-a-component-with-antd