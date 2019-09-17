import { combineReducers } from 'redux';

import articles from './articles';
import serverData from './serverData';


export const reducers = {
  articles,
  serverData
}

const rootReducer = combineReducers({
  ...reducers,
})

export default rootReducer;
