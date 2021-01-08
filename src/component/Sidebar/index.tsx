// module
import React from 'react';
import { useSelector } from 'react-redux';
import { Layout, Menu } from 'antd';
import { UserOutlined, VideoCameraOutlined, UploadOutlined } from '@ant-design/icons';
// source
import { selectSidebarCollapsed } from 'src/feature/interface';
// type
type SiderProps = {

};
// component
export function Sider(props : SiderProps) {
  const sidebarCollapsed = useSelector(selectSidebarCollapsed);

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
export default Sider;