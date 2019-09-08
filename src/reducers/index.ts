import { combineReducers } from 'redux';

import articles from './articles';


export const reducers = {
  articles,
  // dataFromServer,
}

const rootReducer = combineReducers({
  ...reducers,
})

export default rootReducer;
