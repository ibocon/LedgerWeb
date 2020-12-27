// Modules
import { hot } from 'react-hot-loader/root';
import React from 'react';
import { Layout } from 'antd';
import { MyHeader } from 'src/component/Header/MyHeader';
import { MySider } from 'src/component/Sidebar/MySider';

// Styles
import 'antd/dist/antd.css';
import './App.sass';

const { Content } = Layout;

type Props = {};

type State = {
  collapsed: boolean;
};

class App extends React.Component<Props, State> {
  state: State = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <MySider />
        <Layout className="site-layout">
          <MyHeader />
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}>
            <h1>Hello, World!</h1>
            <p>Livereload</p>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default hot(App);
