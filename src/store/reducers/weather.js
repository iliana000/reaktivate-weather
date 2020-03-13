import {
  GET_CURRENT_WEATHER,
  GET_CITY_WEATHER,
  CURRENT_WEATHER_SUCCESS,
  CITY_WEATHER_SUCCESS
} from '../actionTypes';

const initialState = '';

export function weather(state = initialState, action) {
  switch (action.type) {

    case GET_CURRENT_WEATHER:
      return state;
    case CURRENT_WEATHER_SUCCESS:
      return {
        ...state,
        current: action.payload,
        color: getTemperatureColor(action.payload.main.temp)
      };

    case GET_CITY_WEATHER:
      return state;
    case CITY_WEATHER_SUCCESS:
      return {
        ...state,
        city: action.payload
      };

    default:
      return state;
  }
}

function getTemperatureColor(temp) {
  return temp<-10 ? '#00ffff' :
      temp>30 ? '#ff8c00' :
        '#fff700';
}