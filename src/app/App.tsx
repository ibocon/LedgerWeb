// Modules
import { hot } from 'react-hot-loader/root';
import React from 'react';
import { Layout } from 'antd';

// Sources
import { Header } from 'src/component/Header/Header';
import { Sider } from 'src/component/Sidebar/Sider';

// Styles
import 'antd/dist/antd.css';
import './App.sass';

function App() {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider />
      <Layout className="site-layout">
        <Header />
        <Layout.Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}>
          <h1>Hello, World!</h1>
          <p>Livereload</p>
        </Layout.Content>
      </Layout>
    </Layout>
  );
}

export default hot(App);
