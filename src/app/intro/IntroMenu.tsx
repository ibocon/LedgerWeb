// module
import React, { useState, useEffect } from 'react';
import { Menu } from 'antd';
import { AppstoreOutlined, DesktopOutlined } from '@ant-design/icons';
// source
import { BreakPoint } from 'src/app/component';
// component
export function IntroMenu(props : {}) {
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
    return (
        <React.Fragment>
            {!collapsed && <Menu.Item {...props} icon={<AppstoreOutlined />}>Features</Menu.Item> }
            {!collapsed && <Menu.Item {...props} icon={<DesktopOutlined />}>Updates</Menu.Item> }
        </React.Fragment>
    );
}
export default IntroMenu;
// https://stackoverflow.com/questions/50573609/fail-creating-a-submenu-in-a-component-with-antd