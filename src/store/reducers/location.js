import {
  GET_LOCATION,
  LOCATION_SUCCESS,
} from '../actionTypes';

const initialState = '';

export function location(state = initialState, action) {
  switch (action.type) {

    case GET_LOCATION:
      return state;

    case LOCATION_SUCCESS:
      return {
        latitude: action.payload.coords.latitude,
        longitude: action.payload.coords.longitude,
        description: action.payload.description
      };

    default:
      return state;
  }
}