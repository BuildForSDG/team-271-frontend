import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./main/main";
import LoginForm from "./LoginForm";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="">
          <Main />
        </Route>
        <Route exact path="login">
          <LoginForm />
        </Route>
      </Switch>
    </Router>
  );
}
