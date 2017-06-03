
import { combineReducers } from 'redux';
import { reducer as message } from './ExchangeBox';

export const reducer = combineReducers({
  message,
});
