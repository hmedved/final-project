import React, { Component } from "react";
import { BrowserRouter, Route, withRouter, Switch } from "react-router-dom";
import * as endpoints from "./client/endpoints";
// components
import Header from "./components/header";
import Home from "./components/home";
import About from "./components/about";
import Contact from "./components/contact";
import Listings from "./components/listings";
import Apartmentdetails from "./components/apartmentdetails";
import Backsound from "./components/backsound";

console.log("endpoints", endpoints.getApartmentList());

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <div className="App">
            <Backsound />
            <Header />
            <Route exact path="/" component={Home} />

            <Route exact path="/about" component={About} />

            <Route exact path="/listings" component={Listings} />

            <Route
              exact
              path="/apartmentdetails/:id"
              component={Apartmentdetails}
            />

            <Route exact path="/contact" component={Contact} />
          </div>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
