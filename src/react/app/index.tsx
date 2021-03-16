import { hot } from "react-hot-loader/root";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { About } from "./pages/about";
import { Main } from "./pages/main";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route render={() => <h1>404</h1>} />
      </Switch>
    </Router>
  );
}

export default hot(App);
