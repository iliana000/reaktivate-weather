import React from 'react';
import './App.scss';
import {connect} from "react-redux";
import CurrentWeather from "../CurrentWeather/CurrentWeather";
import CityWeather from "../CityWeather/CityWeather";
import Location from "../Location/Location";

function App(props) {

  return (
    <div className="App">
      <header className="App-header" style={{backgroundColor: props.color}}>
        <Location/>
        <CurrentWeather/>
        <CityWeather/>
      </header>
    </div>
  );
}

export default connect(
  state => ({color: state.weather.color})
)(App);
