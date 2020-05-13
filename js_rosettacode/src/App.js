import React, { Component } from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ListPages from "./Pages/ListPages";
import PiCal from "./Pages/PiCalculator";
import Fibonacci from "./Pages/Fibonacci";
import UserOutput from "./CourseExercises/User/UserOutput";
import InputAppComponent from "./CourseExercises/Input/InputAppComponent";
import Themes from "./Pages/Themes";

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
          <Route path="/User">
            <UserOutput />
          </Route>
          <Route path="/BasicInputField">
            <InputAppComponent />
          </Route>
          <Route path="/theme">
            <Themes />
          </Route>
          <Route path="*">
            <h1>Page Not Found</h1>
          </Route>
        </Switch>
        <button className="btn btn-primary">Click Me.. </button>
      </div>
    </Router>
  );
}
