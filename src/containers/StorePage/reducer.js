import { combineReducers } from 'redux';
import { reducer as general } from './General/reducer';
import { reducer as inventory } from './Inventory/reducer';

const reducer = combineReducers({
  general,
  inventory,
});

export default reducer;