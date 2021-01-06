// Modules
import { hot } from 'react-hot-loader/root';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';

// Sources
import { IntroPage } from './intro';
import { BoardPage } from './board';
import { UserPage } from './user';

// Styles
import 'antd/dist/antd.css';

const AppComponent : React.FC = props => {
  return(
    <Layout style={{ minHeight: '100vh' }} >
      <Switch>
        <Route exact path="/" component={IntroPage} />
        <Route path="/user" component={UserPage} />
        <Route path="/board" component={BoardPage} />
      </Switch>
  </Layout>
  );
}

export const App = hot(AppComponent);
export default App;
