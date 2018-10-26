import { combineReducers } from 'redux';

import articles from './articles';

export const reducers = {
  articles,
}

const rootReducer = combineReducers({
  ...reducers,
})

export default rootReducer;
