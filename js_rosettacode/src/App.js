import React, { Component } from "react";
//import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ListPages from "./Pages/ListPages";
import PiCal from "./Pages/PiCalculator";
import Fibonacci from "./Pages/Fibonacci";

export default function App() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/" exact={true}>
            <ListPages />
          </Route>
          <Route path="/pi-calculator">
            <PiCal />
          </Route>
          <Route path="/Fibonacci">
            <Fibonacci />
          </Route>
          <Route path="*">
            <h1>Page Not Found</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
