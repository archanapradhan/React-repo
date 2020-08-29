import React, { Component } from "react";

import "./App.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ListPages from "./Pages/ListPages";
import PiCal from "./Pages/PiCalculator";
import Fibonacci from "./Pages/Fibonacci";
import UserOutput from "./CourseExercises/User/UserOutput";
import InputAppComponent from "./CourseExercises/Input/InputAppComponent";
import Themes from "./Pages/Themes";
import BubbleSort from "./sorting/BubbleSort";

export default function App() {
  return (
    <Router>
      <div className="mx-auto m-5 p-2" style={{ width: "850px" }}>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Link to="/" className="text-center m-2">
          <button className="btn btn-primary">Home </button>
        </Link>
        <div className="my-5 p-2">
          <Switch>
            <Route path="/" exact={true}>
              <ListPages />
            </Route>
            <Route path="/piCalculator">
              <PiCal />
            </Route>
            <Route path="/Fibonacci">
              <Fibonacci />
            </Route>
            <Route path="/User">
              <UserOutput />
            </Route>
            <Route path="/bubble-sort">
              <BubbleSort />
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
        </div>
      </div>
    </Router>
  );
}
