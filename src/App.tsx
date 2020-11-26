// Modules
import { hot } from 'react-hot-loader/root';
import React from 'react';
import { Layout } from 'antd';
import { MyHeader } from 'src/components/MyHeader';
import { MySider } from 'src/components/MySider';
// Styles
import 'antd/dist/antd.css';
import 'src/App.sass';

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
        <MySider></MySider>
        <Layout className="site-layout">
          <MyHeader></MyHeader>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default hot(App);
