// module
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
// source
import { reportWebVitals } from "./reportWebVitals";
import App from "@ledger-app/App";
import { store } from "@ledger-app/feature";
import { mockServer } from "./server.js";
// main
if (process.env.NODE_ENV === "development") {
  mockServer({ environment: "development" });
}
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
