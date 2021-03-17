import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Registration } from "../pages/registration";
import { Main } from "../pages/main";

import { books } from "./books";

export const Routes = () => (
  <Router>
    <Switch>
      <Route exact path={books.home}>
        <Main />
      </Route>
      <Route exact path={books.registration}>
        <Registration />
      </Route>
      <Route render={() => <h1>404</h1>} />
    </Switch>
  </Router>
);
