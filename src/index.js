import React from "react";
import ReactDOM from "react-dom";
import indexRoutes from "routes/index";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";

let history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <Switch>
      {indexRoutes.map((route, i) =>
        route.redirect ? (
          <Redirect key={i} to={route.to} />
        ) : (
          <Route key={i} path={route.path} component={route.component} />
        )
      )}
    </Switch>
  </Router>,
  document.getElementById("root")
);
