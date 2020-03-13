import axios from "axios";
import {
  currentWeatherSuccess,
  cityWeatherSuccess
} from "../actions/weather";

import {
  GET_CURRENT_WEATHER,
  GET_CITY_WEATHER
} from '../actionTypes';
export default store => next => async action => {

  const {type, payload} = action;

  if (type.slice(-7) !== 'WEATHER') return next(action);
  // next(action);
  const state = store.getState();

  let searchParams, callback;
  if (state.location.latitude || payload) {
    switch (type) {
      case GET_CURRENT_WEATHER:
        searchParams = {
          lat: state.location.latitude,
          lon: state.location.longitude
        };
        callback = currentWeatherSuccess;
        break;

      case GET_CITY_WEATHER:
        console.log('in', type);
        searchParams = {
          q: payload
        };
        callback = cityWeatherSuccess;
        break;

      default:
        console.log('wrong action type');
    }
    try {
      const {data} = await axios({
        baseURL: 'https://api.openweathermap.org/data/2.5/',
        url: 'weather',
        params: {
          ...searchParams,
          appid: '142c1e9a1787ce68fb592fb786e93507',
          units: 'metric'
        }
      });
      // console.log('data', data);
      next(callback(data));
    } catch (e) {
      if (e.response.status===404) console.dir('Wrong request')
    }
  }
}