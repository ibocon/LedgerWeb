// Modules
import { hot } from 'react-hot-loader/root';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';

// Sources
import { BreakPoint } from 'src/component/styles';
import { Introduction } from 'src/app/Introduction';
import { Signup } from 'src/app/Signup';
import { Login } from 'src/app/Login';
import { Board } from 'src/app/Board';

// Styles
import 'antd/dist/antd.css';

export function App() {
  return (
    <Layout style={{ minHeight: '100vh' }} >
      <Switch>
        <Route exact path="/" component={Introduction} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/board" component={Board} />
      </Switch>
    </Layout>
  );
}

export default hot(App);
