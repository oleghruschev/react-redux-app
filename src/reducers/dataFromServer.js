import Immutable from 'immutable';

import * as actionTypes from 'constants/actionTypes';
import { immutableize } from 'helpers/immutableize';

export const initialState = Immutable.fromJS({
  loading: false,
  userInfo: {},
  postsInfo: {}
});

const dataFromServer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_USER_INFO:
      return state.set('userInfo', action.payload)

    case actionTypes.SET_LOADING_STATUS:
      return state.set('loading', action.status)  

    case actionTypes.SET_POSTS_INFO:
      return state.set('postsInfo', action.payload)
      
    case actionTypes.RESET_DATA_FROM_SERVER:
      return initialState;

    default: return state;
  }
}

export default immutableize(dataFromServer);
