import { combineReducers } from 'redux';

import articles from './articles';
import dataFromServer from './dataFromServer';

export const reducers = {
  articles,
  dataFromServer,
}

const rootReducer = combineReducers({
  ...reducers,
})

export default rootReducer;
