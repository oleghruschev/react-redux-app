import { combineReducers } from 'redux';

import user from './user';

export const reducers = {
  user,
}

const rootReducer = combineReducers({
  ...reducers,
})

export default rootReducer;
