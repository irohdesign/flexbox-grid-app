import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Intro from "./components/pages/intro.js";
import Grid from "./components/pages/grid/grid-container.js";
import Fused from "./components/pages/fused.js";
import Flex from "./components/pages/flexbox/flex-container.js";
import Nav from "./components/containers/nav.js";
import Header from "./components/containers/header.js";
import "./style.css";


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header/>
          <Nav />
            <Route exact path = "/" component={Intro}/>
            <Route exact path = "/grid" component={Grid}/>
            <Route path = "/flex" component={Flex}/>
            <Route exact path = "/fused" component={Fused}/>
        </div>
      </Router>
    );
  }
}

export default App;
