import * as axios from "axios";
import React, {useState} from 'react';
import './App.css';

function App() {
  const [location, setLocation] = useState('');
  const [weather, setWeather] = useState('');
  const [city, setCity] = useState('');
  const [cityWeather, setCityWeather] = useState('');
  const [temperatureColor, setTemperatureColor] = useState('');
  function getLocation () {
    if (!location && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        geolocation => {
          setLocation(geolocation.coords);
          getWeather(geolocation.coords)
        },
        error => console.log('Error occurred. Error code: ' + error.code)
      )
    }
  };
  async function getWeather(location) {
    const {data} = await axios({
      baseURL: 'https://api.openweathermap.org/data/2.5/',
      url: 'weather',
      params: {
        lat: location.latitude,
        lon: location.longitude,
        appid: '142c1e9a1787ce68fb592fb786e93507',
        units: 'metric'
      }
    });
    setWeather(data);
    setTemperatureColor(getTemperatureColor(data.main.temp));
  }
  async function getCityWeather() {
    const {data} = await axios({
      baseURL: 'https://api.openweathermap.org/data/2.5/',
      url: 'weather',
      params: {
        q: city,
        appid: '142c1e9a1787ce68fb592fb786e93507',
        units: 'metric'
      }
    });
    setCityWeather(data);
  }
  function setTemperature(temp) {
    setWeather({
      ...weather,
      main: {
        ...weather.main,
        temp: temp
      }
    });
    setTemperatureColor(getTemperatureColor(temp));
  }
  function getTemperatureColor(temp) {
    const temperatureColor =
      temp<-10 ? '#00ffff' :
        temp>30 ? '#ff8c00' :
          '#fff700';
    return temperatureColor;
  }


  return (
    <div className="App">
      <header className="App-header" style={{backgroundColor: temperatureColor}}>

        {location ?
          <ul>
            <li>latitude: {location.latitude}</li>
            <li>longitude: {location.longitude}</li>
          </ul>
          :
          <div className="question">
            <p>
              Do you allow to proceed your location?
            </p>
            <div className="buttons">
              <button>Decline</button>
              <button onClick={getLocation}>Allow</button>
            </div>
          </div>
        }
        {weather && <>
          <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt=""/>
          <h2 className="current__temperature">{Math.round(weather.main?.temp)} <small>°C</small></h2>
          <div className="current__city">
            {location.description ??
            `${weather.name}, ${weather.sys?.country}`}
          </div>
          <p>
            <input type="range" min="-50" max="50" value={weather.main?.temp}
                   onChange={e => setTemperature(e.target.value)}/>
          </p>
        </>}

        <div className="city-search">
          <input type="search" onChange={(e)=>setCity(e.target.value)}/>
          <button onClick={getCityWeather}>Search</button>
          {cityWeather && <ul>
            <img src={`https://openweathermap.org/img/wn/${cityWeather.weather[0].icon}@2x.png`} alt=""/>
            <h2 className="current__city">
              {`${cityWeather.name}, ${cityWeather.sys?.country}`}
              <i>{cityWeather.weather[0].description}</i>
            </h2>
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
          </ul>}
        </div>

      </header>
    </div>
  );
}

export default App;
