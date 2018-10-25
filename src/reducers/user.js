import * as actionTypes from 'actions/actionTypes';

const initialState = {
  name: 'no name',
}

const user = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.USER_SET_NAME:
      return {...state, name: action.name }

    default: return state; 
  }
}  

export default user;
