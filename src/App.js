import * as axios from "axios";
import React, {useState} from 'react';
import './App.css';

function App() {
  const [location, setLocation] = useState('');
  const [weather, setWeather] = useState('');
  const getLocation = () => {
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
    return data;
  }
  return (
    <div className="App">
      <header className="App-header">

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
        </>}

      </header>
    </div>
  );
}

export default App;
