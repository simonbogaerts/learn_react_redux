import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./home/HomePage";
import CoursesPage from "./courses/CoursesPage";
import AboutPage from "./about/AboutPage";
import PageNotFound from "./PageNotFound";
import Header from "./common/Header";

const App = () => (
  <div className="container-fluid">
    <Header />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/courses" component={CoursesPage} />
      <Route path="/about" component={AboutPage} />
      <Route component={PageNotFound} />
    </Switch>
  </div>
);

export default App;
