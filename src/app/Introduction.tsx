// Modules
import React from 'react';
import { Layout, Menu } from 'antd';
import styled from 'styled-components';

// Styles
import 'antd/dist/antd.css';

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
    margin: ${logoMargin}px 0px;
    background-color: #bebebe;
`;

const contentMargin = 36;
const contentPadding = headerPadding - contentMargin;
const Content = styled(Layout.Content)`
    padding: 0px ${contentPadding}px;
    margin: 96px ${contentMargin}px 0px ${contentMargin}px;
    background-color: #ffffff;
`;

// Component
export function Introduction() {
    return(
        <Layout>
            <Header>
                <Logo />
                <Menu theme="dark" mode="horizontal">
                    <Menu.Item style={{ float: 'right' }}>Signup</Menu.Item>
                    <Menu.Item style={{ float: 'right' }}>Login</Menu.Item>
                </Menu>
            </Header>
            <Content>
                <h1>Ledger application introduction</h1>
                <p>Ledger application 에 대한 소개</p>
            </Content>
        </Layout>
    );
}

export default Introduction;