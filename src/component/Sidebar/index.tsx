// Modules
import React from 'react';
import { connect } from 'react-redux';
import { Layout, Menu } from 'antd';
import { UserOutlined, VideoCameraOutlined, UploadOutlined } from '@ant-design/icons';

// Sources
import { RootState } from 'src/store/rootReducer';
import { getSidebarCollapsed } from 'src/feature/interface';

// Styles

const mapStateToProps = (state: RootState) => ({
  sidebarCollapsed: getSidebarCollapsed(state.interface),
});

const dispatchProps = {

};

type Props = {
  sidebarCollapsed : boolean;
};

const FuncComponent : React.FC<Props> = props => {
  const { sidebarCollapsed } = props;
  return (
    <Layout.Sider trigger={null} collapsible collapsed={sidebarCollapsed}>
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
        <Menu.Item key="1" icon={<UserOutlined />}>
          nav 1
        </Menu.Item>
        <Menu.Item key="2" icon={<VideoCameraOutlined />}>
          nav 2
        </Menu.Item>
        <Menu.Item key="3" icon={<UploadOutlined />}>
          nav 3
        </Menu.Item>
      </Menu>
    </Layout.Sider>
  );
};

export const Sider =  connect(mapStateToProps, dispatchProps)(FuncComponent);
export default Sider;