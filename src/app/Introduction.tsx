// Modules
import React from 'react';
import { Layout } from 'antd';
import styled from 'styled-components';

// Styles
import 'antd/dist/antd.css';

const HeaderBackground = styled.div`
    position: fixed;
    z-index: 2;
    width: 100vw;
    padding: 0px 0px 3px 0px;
`;
const Header = styled(Layout.Header)`
    position: fixed;
    z-index: 1;
    width: 100vw;
    background-color: #ffffff;
`;
const Logo = styled.div`
    float: left;
    width: 128px;
    height: 64px;
    background-color: #fe31de;
`;
const Content = styled(Layout.Content)`
    padding: 0px 12px;
    margin: 96px 18px 0px 18px;
    background-color: #ffffff;
`;

// Component
export function Introduction() {
    return(
        <Layout>
            <HeaderBackground>
                <Header>
                    <Logo />
                </Header>
            </HeaderBackground>
            <Content>
                <h1>Ledger application introduction</h1>
            </Content>
        </Layout>
    );
}

export default Introduction;