import React, { Component } from "react";
import { Link, BrowserRouter, Route } from "react-router-dom";
import * as endpoints from "./client/endpoints";
// components
import Header from "./components/header";
import Home from "./components/home";
import About from "./components/about";
import Contact from "./components/contact";
import Listings from "./components/listings";
import Tinyhouse from "./components/tinyhouse";
import Oldhouse from "./components/oldhouse";
import Familyhouse from "./components/familyhouse";
import Apartmentdetails from "./components/apartmentdetails";
console.log("endpoints", endpoints.getApartmentList());

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Route exact path="/" component={Home} />

          <Route exact path="/about" component={About} />

          <Route exact path="/listings" component={Listings} />

          <Route exact path="/tinyhouse" component={Tinyhouse} />

          <Route exact path="/oldhouse" component={Oldhouse} />

          <Route exact path="/familyhouse" component={Familyhouse} />

          <Route
            exact
            path="/apartmentdetails/:id"
            component={Apartmentdetails}
          />

          <Route exact path="/contact" component={Contact} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
