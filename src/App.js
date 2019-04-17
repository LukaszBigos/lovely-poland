import React, { Component } from "react";
import Navbar from "./components/Navbar/Navbar";
import CityList from "./components/CityList/CityList";
import "./App.scss";

class App extends Component {
  render() {
    return (
      <main>
        <Navbar />
        <CityList />
      </main>
    );
  }
}

export default App;
