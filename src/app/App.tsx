// module
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';
// source
import { IntroPage } from './intro';
import { BoardPage } from './board';
import { UserPage } from './user';
// style
import 'antd/dist/antd.css';
// component
export function App() {
  return(
    <Layout style={{ minHeight: '100vh' }} >
      <Switch>
        <Route exact path="/" component={IntroPage} />
        <Route path="/user" component={UserPage} />
        <Route path="/board" component={BoardPage} />
        <Redirect to="/" />
      </Switch>
  </Layout>
  );
}
export default App;
