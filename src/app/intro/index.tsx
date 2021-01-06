// Modules
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { AppstoreOutlined, DesktopOutlined } from '@ant-design/icons';
// Sources
import { BreakPoint, Container } from 'src/component';
// Styles
import { StyledHeader, StyledLogo, StyledContent, RightMenuItem } from'./styled';
// Component
const IntroMenuItems = (
    <React.Fragment>
        <Menu.Item icon={<AppstoreOutlined />}>Features</Menu.Item>
        <Menu.Item icon={<DesktopOutlined />}>Updates</Menu.Item>
    </React.Fragment>
);

const FuncComponent : React.FC = props => {

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

    const [introMenuCollapsed, setIntroMenuCollapsed] = useState(false);
    const [userMenuCollapsed, setUserMenuCollapsed] = useState(false);

    useEffect(() => {
        window.addEventListener("resize", onResized);
        return () => window.removeEventListener("resize", onResized);
    });

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
                            <RightMenuItem>
                                <Link to="/user/login">Login</Link>
                            </RightMenuItem>
                        {!userMenuCollapsed &&
                            <RightMenuItem>
                                <Link to="/user/signup">Signup</Link>
                            </RightMenuItem>
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
export const IntroPage = connect()(FuncComponent);
export default IntroPage;