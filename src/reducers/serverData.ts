// import Immutable from 'immutable';

import * as types from 'types/serverDataTypes';
// import { immutableize } from 'helpers/immutableize';

// export const initialState = Immutable.fromJS({
//   isLoading: false,
//   userInfo: {},
//   postsInfo: {}
// });

export const initialState: types.IServerData = {
  isLoading: false,
  userInfo: {
    id: '',
    name: '',
    email: '',
    phone: ''
  },
  postsInfo: []
}

const serverData = (state = initialState, action: types.ServerDataActionTypes) => {
  switch (action.type) {
    case types.SET_USER_INFO:
      return {...state, userInfo: action.payload}
      // return state.set('userInfo', action.payload)

    case types.SET_LOADING_STATUS:
      return {...state, isLoading: action.status}
      // return state.set('isLoading', action.status)  

    case types.SET_POSTS_INFO:
      return {...state, postsInfo: action.payload }
      // return state.set('postsInfo', action.payload)
      
    case types.RESET_DATA_FROM_SERVER:
      return initialState;

    default: return state;
  }
}

// export default immutableize(serverData);
export default serverData;
