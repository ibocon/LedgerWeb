// Modules
import React from 'react';
import { connect } from 'react-redux';
import { Layout, Menu } from 'antd';

// Sources
import { RootState } from 'src/store/rootReducer';
import { getSidebarCollapsed } from 'src/feature/interface';

// Styles
import 'antd/dist/antd.css';
import './index.sass';

// Files
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';

const mapStateToProps = (state: RootState) => ({
  sidebarCollapsed: getSidebarCollapsed(state.interface),
});

const dispatchProps = {

};

type Props = {
  sidebarCollapsed : boolean;
};

const FunctionComponent : React.FC<Props> = props => {
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

export const Sider =  connect(mapStateToProps, dispatchProps)(FunctionComponent);
export default Sider;