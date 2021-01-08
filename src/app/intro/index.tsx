// module
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Layout, Menu } from 'antd';
import { AppstoreOutlined, DesktopOutlined } from '@ant-design/icons';
// source
import { BreakPoint, Container } from 'src/component';
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
// type
export type IntroPageProps = {

}
// component
const IntroMenuItems = (
    <React.Fragment>
        <Menu.Item icon={<AppstoreOutlined />}>Features</Menu.Item>
        <Menu.Item icon={<DesktopOutlined />}>Updates</Menu.Item>
    </React.Fragment>
);
export function IntroPage(props : IntroPageProps) {
    const [introMenuCollapsed, setIntroMenuCollapsed] = useState(false);
    const [userMenuCollapsed, setUserMenuCollapsed] = useState(false);

    useEffect(() => {
        window.addEventListener("resize", onResized);
        return () => window.removeEventListener("resize", onResized);
    });

    function onResized() {
        if(window.innerWidth < BreakPoint.Small)
            setIntroMenuCollapsed(true);
        else
            setIntroMenuCollapsed(false);

        if(window.innerWidth < BreakPoint.Medium)
            setUserMenuCollapsed(true);
        else
            setUserMenuCollapsed(false);
    }

    return(
        <Layout>
            <StyledHeader>
                <Container>
                    <StyledLogo />
                    <Menu theme="dark" mode="horizontal">
                        {introMenuCollapsed ? (
                            <Menu.SubMenu title="Introduction">
                                {IntroMenuItems}
                            </Menu.SubMenu>
                        ) : (
                            <React.Fragment>
                                {IntroMenuItems}
                            </React.Fragment>
                        )}
                        <React.Fragment>
                            <Menu.Item style={{ float: 'right' }}>
                                <Link to="/user/login">Login</Link>
                            </Menu.Item>
                        {!userMenuCollapsed &&
                            <Menu.Item style={{ float: 'right' }}>
                                <Link to="/user/signup">Signup</Link>
                            </Menu.Item>
                        }
                        </React.Fragment>
                    </Menu>
                </Container>
            </StyledHeader>
            <StyledContent>
                <Container style={{ marginTop: '32px' }}>
                    <h1>Ledger application introduction</h1>
                    <p>Ledger application 에 대한 소개</p>
                </Container>
            </StyledContent>
        </Layout>
    );
}
export default IntroPage;