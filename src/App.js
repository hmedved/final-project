import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

// components
import Header from "./components/header";
import Home from "./components/home";
import About from "./components/about";
import Contact from "./components/contact";
import Listings from "./components/listings";
import Tinyhouse from "./components/tinyhouse";
import Oldhouse from "./components/oldhouse";
import Familyhouse from "./components/familyhouse";

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

          <Route exact path="/contact" component={Contact} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
