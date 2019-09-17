// import Immutable from 'immutable';

import * as types from 'types/articlesTypes';
// import { immutableize } from 'helpers/immutableize';

export const initialState: types.IArticles = {
  list: [],
  openArticle: 0,
};

// export const initialState = Immutable.fromJS({
//   list: [],
//   openArticle: 0,
// });


const articles = (state = initialState, action: types.ArticlesActionTypes): types.IArticles => {
  switch (action.type) {
    case types.ARTICLE_SET_CREATE:
      return {... state, list: [...state.list, action.payload]}
      // return state.update('list', list => list.push(action.article));
    
    case types.ARTICLE_SET_OPEN:
      return {...state, openArticle: action.id}
      // return state.set('openArticle', action.id)  

    case types.ARTICLE_DELETE:
      const listFilter = state.list.filter(article => article.id !== action.id)
      
      return {...state, list: listFilter }
      // return state.set('list', state.get('list').filter(article => article.get('id') !== action.id));
      

    default: return state;
  }
}

// export default immutableize(articles);
export default articles;
