// Modules
import React from 'react';
import { connect } from 'react-redux';
import { Layout } from 'antd';

// Sources
import { RootState } from 'src/store/rootReducer';
import { getSidebarCollapsed, switchSidebarCollapsed } from 'src/feature/interface';

// Styles
import 'antd/dist/antd.css';
import './Header.sass';

// Files
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';

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

const FunctionComponent : React.FC<Props> = props => {
  const { sidebarCollapsed, switchSidebarCollapsed } = props;

  return (
    <Layout.Header className='site-layout-background' style={{ padding: 0 }}>
      {React.createElement(
        sidebarCollapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
        {
          className: 'trigger',
          onClick: () => switchSidebarCollapsed(!sidebarCollapsed),
        }
      )}
    </Layout.Header>
  );
};

export const Header =  connect(mapStateToProps, dispatchProps)(FunctionComponent);
export default Header;
