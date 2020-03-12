import React, {useState} from 'react';
import './App.css';
import Json from "./common/Json/Json";

function App() {
  const [location, setLocation] = useState('');
  const getLocation = () => {
    if (!location && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        geolocation => setLocation(geolocation.coords),
        error => console.log('Error occurred. Error code: ' + error.code)
      )
    }
  };
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Do you allow to proceed your location?
        </p>
        <div className="buttons">
          <button>Decline</button>
          <button onClick={getLocation}>Allow</button>
        </div>
        {location && <ul>
          <li>latitude: {location.latitude}</li>
          <li>longitude: {location.longitude}</li>
        </ul>}

      </header>
    </div>
  );
}

export default App;
