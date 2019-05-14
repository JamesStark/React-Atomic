import React, { Component } from "react";
import Header from "components/Header/Header";
import SideBar from "components/SideBar/SideBar";
import Footer from "components/Footer/Footer";
import DashboardRoutes from "routes/Dashboard";
import { Switch, Route, Redirect } from "react-router-dom";
import { withRouter } from "react-router-dom";

class App extends Component {
  state = {

  };
  
  switchRoutes = DashboardRoutes.map((route, i) => {
    if (route.redirect) {
      return <Redirect key={i} to={route.to} />;
    }

    return (
      <Route
        key={i}
        path={route.path}
        component={() => (
          <route.component />
        )}
      />
    );
  });

  render() {
    return (
      <div>
        <div className="App">
          <Header />
          <SideBar />
          <Switch>{this.switchRoutes}</Switch>
          <Footer />
        </div>
      </div>
    );
  }
}

export default withRouter(App);
