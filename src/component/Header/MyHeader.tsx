// Modules
import React from 'react';
import { Layout } from 'antd';

// Styles
import 'antd/dist/antd.css';
import './MyHeader.sass';

// Files
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';

const { Header } = Layout;

type Props = {};
type State = {
  collapsed: boolean;
};

export class MyHeader extends React.Component<Props, State> {
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
      <Header className='site-layout-background' style={{ padding: 0 }}>
        {React.createElement(
          this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
          {
            className: 'trigger',
            onClick: this.toggle,
          }
        )}
      </Header>
    );
  }
}
