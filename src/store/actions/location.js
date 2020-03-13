import {
  GET_LOCATION,
  LOCATION_SUCCESS
} from '../actionTypes';

export function getLocation() {
  return {
    type: GET_LOCATION
  };
}

export function locationSuccess(payload) {
  return {
    type: LOCATION_SUCCESS,
    payload
  };
}