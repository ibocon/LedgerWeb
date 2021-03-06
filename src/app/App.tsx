// module
import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { Layout } from "antd";
// source
import { PrivateRoute } from "./component";
import { IntroPage } from "./intro";
import { BoardPage } from "./board";
import { UserPage } from "./user";
// style
import "src/style/index.scss";
// component
export function App() {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Switch>
        <Route exact path="/">
          <IntroPage />
        </Route>
        <Route path="/user">
          <UserPage />
        </Route>
        <PrivateRoute path="/board">
          <BoardPage />
        </PrivateRoute>
        <Redirect to="/" />
      </Switch>
    </Layout>
  );
}
export default App;
