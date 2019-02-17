import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Intro from "./components/pages/intro.js";
import Grid from "./components/pages/grid/grid-container.js";
import Fused from "./components/pages/fused.js";
import Flex from "./components/pages/flexbox/flex-container.js";
import Nav from "./components/nav.js";


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path = "/" component={Intro}/>
            <Route exact path = "/grid" component={Grid}/>
            <Route exact path = "/flex" component={Flex}/>
            <Route exact path = "/fused" component={Fused}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
