import React from 'react';
import './Location.scss';
import {connect} from "react-redux";
import {getLocation} from "../../store/actions/location";
import {getCurrentWeather} from "../../store/actions/weather";

function Location(props) {
  const {location} = props;

  return (
    <div className="location">
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
            <button onClick={props.getLocation}>Allow</button>
          </div>
        </div>
      }
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
  getLocation, getCurrentWeather
})(Location);
