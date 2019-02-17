import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Intro from "./components/pages/intro.js";
import Grid from "./components/pages/grid/grid-container.js";
import Fused from "./components/pages/fused.js";
import Flex from "./components/pages/flexbox/flex-container.js";
import Nav from "./components/containers/nav.js";
import Wrapper from "./components/containers/wrapper.js";


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Wrapper>
            <Route exact path = "/" component={Intro}/>
            <Route exact path = "/grid" component={Grid}/>
            <Route exact path = "/flex" component={Flex}/>
            <Route exact path = "/fused" component={Fused}/>
          </Wrapper>
        </div>
      </Router>
    );
  }
}

export default App;
