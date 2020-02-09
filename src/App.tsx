import React, { useState, Suspense } from "react";
import {
  HashRouter as Router,
  Route,
  Link,
  Redirect,
  Switch
} from "react-router-dom";
import Loadable from "react-loadable";
import Loading from "./components/loading/index";

const Home = Loadable({
  loader: () => import("./pages/home"),
  loading: Loading
});

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/(.+)" component={Home} />
      </Switch>
    </Router>
  );
}
