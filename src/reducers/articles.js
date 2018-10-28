import Immutable from 'immutable';

import * as actionTypes from 'actions/actionTypes';
import { immutableize } from 'helpers/immutableize';

const initialState = Immutable.fromJS({
  list: [],
});

const articles = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ARTICLE_SET_CREATE:
      return state.update('list', list => list.push(action.article))

    default: return state;
  }
}

export default immutableize(articles);
