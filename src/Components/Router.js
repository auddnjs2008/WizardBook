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
import GryStudent from "../Routes/GryStudent";
import Slytherin from "../Routes/Slytherin";
import SlyStudent from "../Routes/SlyStudent";
import Hufflepuff from "../Routes/Hufflepuff";
import Ravenclaw from "../Routes/Ravenclaw";
import Detail from "../Routes/Detail";
export default () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/info" component={Info} />
      <Route path="/Gryffindor" exact component={Gryffindor} />
      <Route path ="/Gryffindor/students" component={GryStudent} />
    
      <Route path="/Slytherin" exact component={Slytherin} />
      <Route path="/Slytherin/students" component={SlyStudent}/>
      <Route path="/Hufflepuff" exact component={Hufflepuff} />
      
      <Route path="/Ravenclaw" exact component={Ravenclaw} />
      
      <Redirect from="*" to="/" />
    </Switch>
  </Router>
);
