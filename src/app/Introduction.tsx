// Modules
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Layout, Menu } from 'antd';

// Sources
import { Container, BreakPoint } from 'src/component/styles';

// Styles
import 'antd/dist/antd.css';
import {
    AppstoreOutlined,
    DesktopOutlined,
} from '@ant-design/icons';

const headerHeight = 64;
const headerPadding = 50;
const Header = styled(Layout.Header)`
    position: fixed;
    z-index: 1;
    width: 100vw;
    height: ${headerHeight}px;
    padding: 0px ${headerPadding}px;
`;

const logoHeight = 36;
const logoMargin = (headerHeight - logoHeight) / 2;
const Logo = styled.div`
    float: left;
    width: 128px;
    height: ${logoHeight}px;
    margin: ${logoMargin}px 8px ${logoMargin}px 0px;
    background-color: #bebebe;
`;

const contentPadding = headerPadding;
const Content = styled(Layout.Content)`
    padding: 0px ${contentPadding}px;
    margin-top: ${headerHeight}px;
    background-color: #ffffff;
`;

// Component
export function Introduction() {

    const [menuCollapsed, setMenuCollapsed] = useState(false);

    function responsiveLayout() {
        if(window.innerWidth < BreakPoint.Medium)
            setMenuCollapsed(true);
        else
            setMenuCollapsed(false);
    }

    useEffect(() => {
        window.addEventListener("resize", responsiveLayout);
        return () => window.removeEventListener("resize", responsiveLayout);
    });

    const subPages = 
        <React.Fragment>
            <Menu.Item icon={<AppstoreOutlined />}>Features</Menu.Item>
            <Menu.Item icon={<DesktopOutlined />}>Updates</Menu.Item>
        </React.Fragment>
    
    return(
        <Layout>
            <Header>
                <Container>
                    <Logo />
                    <Menu theme="dark" mode="horizontal">
                        {
                            menuCollapsed ? 
                            (
                                <Menu.SubMenu key="left" title="Pages">
                                    {subPages}
                                </Menu.SubMenu>
                            ) : (
                                subPages
                            )
                        }
                        <Menu.Item style={{ float: 'right' }}>
                            <Link to="/login">Login</Link>
                        </Menu.Item>
                        {
                            !menuCollapsed &&
                            <Menu.Item style={{ float: 'right' }}>
                                <Link to="/signup">Signup</Link>
                            </Menu.Item>
                        }
                    </Menu>
                </Container>
            </Header>
            <Content>
                <Container style={{ marginTop: '32px' }}>
                    <h1>Ledger application introduction</h1>
                    <p>Ledger application 에 대한 소개</p>
                </Container>
            </Content>
        </Layout>
    );
}
export default Introduction;