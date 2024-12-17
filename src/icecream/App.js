import React from "react";
import Home from "./Home";
import { Route, Switch } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import Error from "./Error";
import '../src/stylesheet.css';
import '../src/responsive.css';
import '../src/font/stylesheet.css'
import ScrollToTop from "./ScrollToTop";
import '../icecream/stylesheet.css'
import '../icecream/responsive.css'

const App = () => {
  return (
    <>
    <Router>
    <ScrollToTop/>
      <Switch>
        <Route exact path="/" component={Home}></Route>     
        <Route component={Error}></Route>
      </Switch>
      </Router>
    </>
  );
};

export default App;