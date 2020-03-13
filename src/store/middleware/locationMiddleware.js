import {
  GET_LOCATION,
} from "../actionTypes";
import {locationSuccess} from "../actions/location";


export default store => next => async action => {

  const {type} = action;
  if (type !== GET_LOCATION) return next(action);
  // next(action);
  const state = store.getState();

  if (!state.location.latitude && navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      location => next(locationSuccess(location)),
      error => console.log('Error occurred. Error code: ' + error.code)
    )
  }
}