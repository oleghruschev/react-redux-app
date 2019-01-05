import { put, takeEvery, select } from 'redux-saga/effects'

import * as actionTypes from 'constants/actionTypes';

export const setCreateArticle = (article) => ({
  type: actionTypes.ARTICLE_SET_CREATE,
  article,
});


export const setOpenArticle = (id) => ({
  type: actionTypes.ARTICLE_SET_OPEN,
  id,
});


export const deleteArticle = (id) => ({
  type: actionTypes.ARTICLE_DELETE,
  id,
})

export const createArticle = (title, content) => ({
  type: actionTypes.ARTICLE_CREATE,
  title,
  content
})

export function* watchCreateArticle() {
  yield takeEvery(actionTypes.ARTICLE_CREATE, functionCreateArticle);
}

export function* functionCreateArticle(action) {
  const { title, content } = action;

  const getList = (state) => state.articles.list;
  const list = yield select(getList)

  const id = list.length
    ? list[list.length - 1].id + 1
    : 1

  const newArticle = {
    id,
    title,
    content
  }

  yield put(setOpenArticle(id));
  yield put(setCreateArticle(newArticle));
};


  

// export const createArticle = (title, content) => (dispatch, getState) => {
//   const list = getState().articles.list;
//   const id = list.length
//     ? list[list.length - 1].id + 1
//     : 1
//   const newArticle = {
//     id,
//     title,
//     content,
//   }

//   dispatch(setOpenArticle(id));
//   dispatch(setCreateArticle(newArticle));
// };
