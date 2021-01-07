// Modules
import React from 'react';
import { connect } from 'react-redux';
import styled, { css } from 'styled-components';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';

// Sources
import { RootState } from 'src/store/rootReducer';
import { getSidebarCollapsed, switchSidebarCollapsed } from 'src/feature/interface';

// Styles
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

// Redux
const mapStateToProps = (state: RootState) => ({
    sidebarCollapsed: getSidebarCollapsed(state.interface),
});
  
const dispatchProps = {
    switchSidebarCollapsed: switchSidebarCollapsed,
};

type Props = {
    sidebarCollapsed : boolean;
    switchSidebarCollapsed : (isCollapsed: boolean) => void;
};

// Component
const FuncComponent : React.FC<Props> = props => {
    const { sidebarCollapsed, switchSidebarCollapsed } = props;

    if(sidebarCollapsed) {
        return <StyledMenufoldOutlined onClick={ () => switchSidebarCollapsed(false)} />
    }
    else {
        return <StyledMenuUnfoldOutlined onClick={ () => switchSidebarCollapsed(true)} />
    }
}

export const CollapseMenu =  connect(mapStateToProps, dispatchProps)(FuncComponent);
export default CollapseMenu;