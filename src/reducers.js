import { LOCATION_CHANGE } from 'react-router-redux';
import { combineReducers } from 'redux';
import merge from 'lodash/merge';
import { reducer as formReducer } from 'redux-form';
import { reducer as toastrReducer } from 'react-redux-toastr';
import { reducer as modalReducer } from    'containers/DialogsContainer/reducer';


// Initial routing state
const routeInitialState = {
  locationBeforeTransitions: null,
};

/**
 * Merge route into the global application state
 */
function routeReducer(state = routeInitialState, action) {
  switch (action.type) {
    /* istanbul ignore next */
    case LOCATION_CHANGE:
      return { ...state, locationBeforeTransitions: action.payload };
    default:
      return state;
  }
}

/**
 * Entities reducer for store entities data
 */
function entitiesReducer(state = {}, action) {
  if (action.payload && action.payload.entities) {
    return merge({}, state, action.payload.entities);
  }
  return state;
}

/**
 * Creates the main reducer with the asynchronously loaded ones
 */
export default function createReducer(asyncReducers) {
  const appReducers = combineReducers({
    form: formReducer,
    routing: routeReducer,
    toastr: toastrReducer,
    modal: modalReducer,
    ...asyncReducers,
  });

  const rootReducer = (state, action) => {
    if (action.type === 'RESET_STATE') {
      const { user, routing, entities } = state; // Remain some state
      state = { user, routing, entities }; // eslint-disable-line no-param-reassign
    }

    return appReducers(state, action);
  };

  return rootReducer;
}
