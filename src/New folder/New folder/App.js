import React from "react";
import Home from "./Home";
import { Route, Switch } from "react-router";
import Error from "./pages/Error";
import '../src/stylesheet.css';
import '../src/font/stylesheet.css';

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route component={Error}></Route>
      </Switch>
    </>
  );
};

export default App;
