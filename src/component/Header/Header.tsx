// Modules
import React, { useState } from 'react';
import { Layout } from 'antd';

// Styles
import 'antd/dist/antd.css';
import './Header.sass';

// Files
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';

export function Header () {

  const [collapsed, setCollapsed]= useState(false);

  return (
    <Layout.Header className='site-layout-background' style={{ padding: 0 }}>
      {React.createElement(
        collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
        {
          className: 'trigger',
          onClick: () => setCollapsed(!collapsed),
        }
      )}
    </Layout.Header>
  );
}

export default Header;
