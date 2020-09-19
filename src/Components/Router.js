import React from "react";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import Home from "../Routes/Home";
import Info from "../Routes/Info";
import Gryffindor from "../Routes/Gryffindor";
import Slytherin from "../Routes/Slytherin";
import Hufflepuff from "../Routes/Hufflepuff";
import Ravenclaw from "../Routes/Ravenclaw";
export default () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/info" component={Info} />
      <Route path="/Gryffindor" component={Gryffindor} />
      <Route path="/Slytherin" component={Slytherin} />
      <Route path="/Hufflepuff" component={Hufflepuff} />
      <Route path="/Ravenclaw" component={Ravenclaw} />
      <Redirect from="*" to="/" />
    </Switch>
  </Router>
);
