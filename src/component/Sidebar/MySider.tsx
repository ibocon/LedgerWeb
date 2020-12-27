// Modules
import React from 'react';
import { Layout, Menu } from 'antd';

// Styles
import 'antd/dist/antd.css';
import './MySider.sass';

// Files
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';

const { Sider } = Layout;

type Props = {};

type State = {
  collapsed: boolean;
};

export class MySider extends React.Component<Props, State> {
  
  state: State = {
    collapsed: false,
  };

  render() {
    return (
      <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
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
      </Sider>
    );
  }
}
