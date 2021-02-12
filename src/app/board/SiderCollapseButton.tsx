// module
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled, { css } from 'styled-components';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
// source
import { selectSidebarCollapsed, switchSidebarCollapsed } from 'src/app/feature';
// style
const menuStyle = css`
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
    &:hover {
        color: #1890ff;
    }
`;
const StyledMenuUnfoldOutlined = styled(MenuUnfoldOutlined)`
    ${menuStyle}
`;
const StyledMenufoldOutlined = styled(MenuFoldOutlined)`
    ${menuStyle}
`;
// component
export function SiderCollapseButton(props : {}) {
    const dispatch = useDispatch();
    const sidebarCollapsed = useSelector(selectSidebarCollapsed);

    if(sidebarCollapsed)
        return <StyledMenufoldOutlined onClick={ () => dispatch(switchSidebarCollapsed(false))} />
    else
        return <StyledMenuUnfoldOutlined onClick={ () => dispatch(switchSidebarCollapsed(true))} />
}
export default SiderCollapseButton;