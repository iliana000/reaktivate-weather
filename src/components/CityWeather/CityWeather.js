import React, {useState} from 'react';
import './CityWeather.scss';
import {connect} from "react-redux";
import {getLocation} from "../../store/actions/location";
import {getCityWeather} from "../../store/actions/weather";

function CityWeather(props) {
  const {cityWeather} = props;
  const [city, setCity] = useState('');

  return (
    <div className="city-weather">
      <div className="city-weather__search">
        <input type="search" onChange={(e)=>setCity(e.target.value)}/>
        <button onClick={()=>props.getCityWeather(city)}>Search</button>
      </div>
      {cityWeather && <div className="city-weather__card">
        <img className="city-weather__img" src={`https://openweathermap.org/img/wn/${cityWeather.weather[0].icon}@2x.png`} alt=""/>
        <b className="current__city">
          {`${cityWeather.name}, ${cityWeather.sys?.country} `}
          <i> {cityWeather.weather[0].description}</i>
        </b>
        <div>
          <span className="current__temperature">{Math.round(cityWeather.main.temp*10)/10} <small>°C</small></span>
          <span>
            {`temperature from ${Math.round(cityWeather.main.temp_min*10)/10} to ${Math.round(cityWeather.main.temp_max*10)/10} °С, 
          wind ${cityWeather.wind.speed} m/s. clouds ${cityWeather.clouds.all} %, ${cityWeather.main.pressure} hpa`}
          </span>
        </div>
        <div>
          Geo coords [{cityWeather.coord.lat}, {cityWeather.coord.lon}]
        </div>
      </div>}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    location: state.location,
    cityWeather: state.weather.city
  };
};

export default connect(mapStateToProps, {
  getLocation, getCityWeather
})(CityWeather);
