import * as actionTypes from 'actions/actionTypes';

const initialState = {
  list: [],
}

const articles = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ARTICLE_SET_CREATE:
      return {...state, list: action.list}

    default: return state; 
  }
}  

export default articles;
