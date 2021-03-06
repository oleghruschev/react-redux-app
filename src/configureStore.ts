// import thunkMiddleware from 'redux-thunk';
import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga'
import { all } from 'redux-saga/effects'

import { watchCreateArticle } from 'actions/articles';
import { watchFetcInfoFromServer } from 'actions/serverData';
import rootReducer from 'reducers';

const sagaMiddleware = createSagaMiddleware()

const initialState = {};
const composeEnhancers = compose;
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancers = composeEnhancers(applyMiddleware(sagaMiddleware));
// const enhancers = composeEnhancers(applyMiddleware(thunkMiddleware));

function* rootSaga() {
  yield all([
    watchCreateArticle(),
    watchFetcInfoFromServer()
  ])
}

export const store = createStore(rootReducer, initialState, enhancers);

sagaMiddleware.run(rootSaga);
