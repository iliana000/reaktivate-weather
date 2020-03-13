import {
  GET_CURRENT_WEATHER,
  GET_CITY_WEATHER,
  CURRENT_WEATHER_SUCCESS,
  CITY_WEATHER_SUCCESS
} from '../actionTypes';

export function getCurrentWeather() {
  return {
    type: GET_CURRENT_WEATHER
  };
}
export function currentWeatherSuccess(payload) {
  return {
    type: CURRENT_WEATHER_SUCCESS,
    payload
  };
}

export function getCityWeather(city) {
  return {
    type: GET_CITY_WEATHER,
    payload: city
  };
}
export function cityWeatherSuccess(payload) {
  return {
    type: CITY_WEATHER_SUCCESS,
    payload
  };
}