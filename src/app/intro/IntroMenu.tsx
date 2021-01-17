// module
import React, { useState, useEffect } from 'react';
import { Menu } from 'antd';
import { AppstoreOutlined, DesktopOutlined } from '@ant-design/icons';
// source
import { BreakPoint } from 'src/app/component';
// type
export type IntroMenuProps = {

}
// component
export function IntroMenu(props : IntroMenuProps) {
    const [collapsed, setCollapsed] = useState(false);

    useEffect(() => {
        window.addEventListener("resize", onResized);
        return () => window.removeEventListener("resize", onResized);
    });

    function onResized() {
        if(window.innerWidth < BreakPoint.Small)
            setCollapsed(true);
        else
            setCollapsed(false);
    }

    const IntroMenuItems = (
        <React.Fragment>
            <Menu.Item {...props} icon={<AppstoreOutlined />}>Features</Menu.Item>
            <Menu.Item {...props} icon={<DesktopOutlined />}>Updates</Menu.Item>
        </React.Fragment>
    );

    if (collapsed) {
        return (
            <Menu.SubMenu title="Introduction">
                {IntroMenuItems}
            </Menu.SubMenu>
        );
    } else {
        return IntroMenuItems;
    }
}
export default IntroMenu;
// https://stackoverflow.com/questions/50573609/fail-creating-a-submenu-in-a-component-with-antd