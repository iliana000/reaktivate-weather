import { combineReducers } from 'redux';

import {location} from "../reducers/location";
import {weather} from "../reducers/weather";

const createRootReducer = () => combineReducers({
  location,
  weather,
});
export default createRootReducer