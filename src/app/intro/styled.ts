import styled from 'styled-components';
import { Layout, Menu } from 'antd';

const headerHeight = 64;
const headerPadding = 50;
export const StyledHeader = styled(Layout.Header)`
    position: fixed;
    z-index: 1;
    width: 100vw;
    height: ${headerHeight}px;
    padding: 0px ${headerPadding}px;
`;

const logoHeight = 36;
const logoMargin = (headerHeight - logoHeight) / 2;
export const StyledLogo = styled.div`
    float: left;
    width: 128px;
    height: ${logoHeight}px;
    margin: ${logoMargin}px 8px ${logoMargin}px 0px;
    background-color: #bebebe;
`;

const contentPadding = headerPadding;
export const StyledContent = styled(Layout.Content)`
    padding: 0px ${contentPadding}px;
    margin-top: ${headerHeight}px;
    background-color: #ffffff;
`;

export const RightMenuItem = styled(Menu.Item)`
    float: right;
`;

