// import Immutable from 'immutable';

import { IArticles, ArticlesActionTypes } from 'types/articlesTypes';
import * as actionTypes from 'constants/actionTypes';
// import { immutableize } from 'helpers/immutableize';

export const initialState: IArticles = {
  list: [],
  openArticle: 0,
};

// export const initialState = Immutable.fromJS({
//   list: [],
//   openArticle: 0,
// });


const articles = (state: IArticles = initialState, action: ArticlesActionTypes): IArticles => {
  switch (action.type) {
    case actionTypes.ARTICLE_SET_CREATE:
      return {... state, list: [...state.list, action.payload]}
      // return state.update('list', list => list.push(action.article));
    
    case actionTypes.ARTICLE_SET_OPEN:
      return {...state, openArticle: action.id}
      // return state.set('openArticle', action.id)  

    case actionTypes.ARTICLE_DELETE:
      return state
      // return state.set('list', state.get('list').filter(article => article.get('id') !== action.id));
      

    default: return state;
  }
}

// export default immutableize(articles);
export default articles;
