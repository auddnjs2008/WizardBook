import React from "react";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import Home from "../Routes/Home";
import Info from "../Routes/Info";
export default () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/info" component={Info} />
      <Redirect from="*" to="/" />
    </Switch>
  </Router>
);
