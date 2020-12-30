// Modules
import React, { useState } from 'react';
import { Layout, Menu } from 'antd';

// Styles
import 'antd/dist/antd.css';
import './Sider.sass';

// Files
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';

export function Sider() {
  
  const [collapsed, setCollapsed]= useState(false);

  return (
    <Layout.Sider trigger={null} collapsible collapsed={collapsed}>
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
  
}

export default Sider;
