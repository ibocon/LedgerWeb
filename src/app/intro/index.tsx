// module
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
// [LEDGER-121] https://github.com/ant-design/ant-design/issues/26136
import { Layout, Menu } from 'antd';
import { MenuInfo } from 'rc-menu/lib/interface';
import { AppstoreOutlined, BookOutlined, DesktopOutlined } from '@ant-design/icons';
// source
import { BreakPoint, Container, DecideBreakPoint } from 'src/app/component';
// type
enum MenuKey {
    ledger = 'ledger',
    feature = 'feature',
    update = 'update',
}
// style
const headerHeight = 64;
const headerPadding = 50;
const StyledHeader = styled(Layout.Header)`
    position: fixed;
    z-index: 1;
    width: 100vw;
    height: ${headerHeight}px;
    padding: 0px ${headerPadding}px;
`;
const logoHeight = 36;
const logoMargin = (headerHeight - logoHeight) / 2;
const StyledLogo = styled.div`
    float: left;
    width: 128px;
    height: ${logoHeight}px;
    margin: ${logoMargin}px 8px ${logoMargin}px 0px;
    background-color: #bebebe;
`;
const contentPadding = headerPadding;
const StyledContent = styled(Layout.Content)`
    padding: 0px ${contentPadding}px;
    margin-top: ${headerHeight}px;
    background-color: #ffffff;
`;
// component
export function IntroPage() {
    const [menuKey, setMenuKey] = useState<MenuKey>(MenuKey.ledger);
    const [breakPoint, setBreakPoint] = useState<BreakPoint>(BreakPoint.Large);

    useEffect(() => {
        window.addEventListener("resize", onResized);
        return () => window.removeEventListener("resize", onResized);
    });

    const onResized = () => {
        const newBreakPoint = DecideBreakPoint(window.innerWidth);
        setBreakPoint(newBreakPoint);
        if(newBreakPoint === BreakPoint.XSmall) {
            setMenuKey(MenuKey.ledger);
        }
    };

    const onMenuClick = (e : MenuInfo) => {
        const key = e.key.toString();
        if(key === MenuKey.ledger || key === MenuKey.feature || key === MenuKey.update) {
            setMenuKey(key);
        }
    };

    const Menus = (
        <React.Fragment>
            <Menu.Item 
                key={MenuKey.ledger} 
                icon={<BookOutlined />} 
                style={{ float: 'right' }}>
                    Ledger
            </Menu.Item>
            <Menu.Item 
                key={MenuKey.feature} 
                icon={<AppstoreOutlined />} 
                style={{ float: 'right' }}>
                Features
            </Menu.Item>
            <Menu.Item 
                key={MenuKey.update} 
                icon={<DesktopOutlined />} 
                style={{ float: 'right' }}>
                Updates
            </Menu.Item>
        </React.Fragment>
    );
    
    return(
        <Layout>
            <StyledHeader>
                <Container>
                    <StyledLogo />
                    <Menu 
                        theme="dark" 
                        mode="horizontal" 
                        defaultSelectedKeys={[menuKey]} 
                        selectedKeys={[menuKey]} 
                        collapsedWidth={BreakPoint.Small}
                        onClick={onMenuClick}>
                        <Menu.Item><Link to="/user/signup">Signup</Link></Menu.Item>
                        <Menu.Item><Link to="/user/login">Login</Link></Menu.Item>
                        {breakPoint === BreakPoint.Small &&
                            <Menu.SubMenu title="Menus" style={{ float: 'right'}}>
                                { Menus }
                            </Menu.SubMenu>
                        }
                        {(breakPoint === BreakPoint.Medium || breakPoint === BreakPoint.Large) &&
                            Menus
                        }
                    </Menu>
                </Container>
            </StyledHeader>
            <StyledContent>
                <Container style={{ marginTop: '32px' }}>
                    { menuKey === 'ledger' && (
                        <div>
                            <h1>Ledger application introduction</h1>
                            <p>Ledger application 에 대한 소개</p>
                        </div>
                    )}
                    { menuKey === 'feature' && (
                        <div>
                            <h1>Ledger feature introduction</h1>
                            <p>Ledger feature 에 대한 소개</p>
                        </div>
                    )}
                    { menuKey === 'update' && (
                        <div>
                            <h1>Ledger update introduction</h1>
                            <p>Ledger update 에 대한 소개</p>
                        </div>
                    )}
                </Container>
            </StyledContent>
        </Layout>
    );
}
export default IntroPage;