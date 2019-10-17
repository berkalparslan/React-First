import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route } from "react-router-dom";

import App from "./screens/App";
import Home from "./screens/Home";
import Settings from "./screens/Settings";
import Product from "./screens/Product";

const nsRoute = (
  <Router>
    <Route exact path="/" component={App}></Route>
    <Route path="/home" component={Home}></Route>
    <Route path="/settings" component={Settings}></Route>
    <Route path="/product/:id" component={Product}></Route>
  </Router>
);

ReactDOM.render(nsRoute, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
