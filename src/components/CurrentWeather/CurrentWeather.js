import React, {useEffect} from 'react';
import './CurrentWeather.scss';
import {connect} from "react-redux";
import {getLocation} from "../../store/actions/location";
import {getCurrentWeather, currentWeatherSuccess} from "../../store/actions/weather";

function CurrentWeather(props) {
  const {location, weather, getCurrentWeather, currentWeatherSuccess} = props;

  useEffect(() => {
    getCurrentWeather();
  }, [location, getCurrentWeather]);

  function setTemperature(temp) {
    currentWeatherSuccess({
      ...weather,
      main: {
        ...weather.main,
        temp: temp
      }
    });
  }

  return (
    <div className="current-weather">
      {weather && <>
        <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt=""/>
        <h2 className="current__temperature">{Math.round(weather.main?.temp)} <small>°C</small></h2>
        <div className="current__city">
          {`${weather.name}, ${weather.sys?.country}`}
        </div>
        <p>
          <input type="range" min="-50" max="50" value={weather.main?.temp}
                 onChange={e => setTemperature(e.target.value)}
          />
        </p>
      </>}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    location: state.location,
    weather: state.weather.current
  };
};

export default connect(mapStateToProps, {
  getLocation, getCurrentWeather, currentWeatherSuccess
})(CurrentWeather);
