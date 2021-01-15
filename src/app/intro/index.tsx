// module
import React from 'react';
import styled from 'styled-components';
import { Layout, Menu } from 'antd';
// source
import { BasicRouteComponentProps } from 'src/index.d.ts';
import { Container } from 'src/component';
import UserMenu from './UserMenu';
import IntroMenu from './IntroMenu';
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
export interface IntroPageProps extends BasicRouteComponentProps {

}
// component
export function IntroPage(props : IntroPageProps) {
    const { history, location, match, staticContext, ...others } = props;

    return(
        <Layout>
            <StyledHeader>
                <Container>
                    <StyledLogo />
                    <Menu theme="dark" mode="horizontal">
                        <IntroMenu {...others} />
                        <UserMenu {...others} />
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