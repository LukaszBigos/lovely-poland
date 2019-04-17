import React, { Component } from "react";
import "./CityList.scss";
import "../City/City";
import City from "../City/City";
import { cityData } from "../../cityData";

export default class CityList extends Component {
  state = {
    cities: cityData
  };

  removeCityHandler = id => {
    const { cities } = this.state;
    const filteredCities = cities.filter(city => city.id !== id);
    this.setState({
      cities: filteredCities
    });
  };

  render() {
    const { cities } = this.state;

    return (
      <section className="citylist">
        {cities.map(city => (
          <City key={city.id} city={city} removeCity={this.removeCityHandler} />
        ))}
      </section>
    );
  }
}
