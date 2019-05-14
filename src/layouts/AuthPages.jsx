import React, { Component } from "react";
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import { Switch, Route, Redirect } from "react-router-dom";
import AuthRoutes from "routes/AuthRoutes";

class LogIn extends Component {
  state = {
    
  };

  switchComponent = AuthRoutes.map(route =>
    route.redirect ? (
      <Redirect to={route.to} />
    ) : (
      <Route
        path={route.path}
        component={() => <route.component />}
      />
    )
  );
 
  render() {
    return (
      <div>
        <Header />
        <Switch>{this.switchComponent}</Switch>
        <Footer />
      </div>
    );
  }
}

export default LogIn;
