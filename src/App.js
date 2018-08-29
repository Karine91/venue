import React, { Component } from "react";
import "./resources/styles.css";
import { Element } from "react-scroll";

import Header from "./components/header_footer/Header";
import Features from "./components/features";
import VenuNfo from "./components/venuNfo";
import Highlight from "./components/Highlights";
import Pricing from "./components/Pricing";
import Location from "./components/location";
import Footer from "./components/header_footer/Footer";

class App extends Component {
  render() {
    return (
      <div className="App" style={{ height: "1500px", background: "blue" }}>
        <Header />
        <Element name="featured">
          <Features />
        </Element>
        <Element name="venuenfo">
          <VenuNfo />
        </Element>
        <Element name="highlight">
          <Highlight />
        </Element>
        <Element name="pricing">
          <Pricing />
        </Element>
        <Element name="location">
          <Location />
        </Element>
        <Footer />
      </div>
    );
  }
}

export default App;
