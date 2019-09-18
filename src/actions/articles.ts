import { put, select, takeEvery } from 'redux-saga/effects';

import { IAppState } from 'types';
import * as types from 'types/articlesTypes';

export const setCreateArticle = (
  payload: types.IArticle
): types.ISetCreateArticleAction => ({
  type: types.ARTICLE_SET_CREATE,
  payload,
});

export const setOpenArticle = (id: number): types.IOpenArticleAction => ({
  type: types.ARTICLE_SET_OPEN,
  id,
});

export const deleteArticle = (id: number): types.IDeleteArticleAction => ({
  type: types.ARTICLE_DELETE,
  id,
});

export const createArticle = (
  title: string,
  content: string
): types.ICreateArticleAction => ({
  type: types.ARTICLE_CREATE,
  title,
  content,
});

export function* watchCreateArticle() {
  yield takeEvery(types.ARTICLE_CREATE, functionCreateArticle);
}

export function* functionCreateArticle(action: types.ICreateArticleAction) {
  const { title, content } = action;

  const getList = (state: IAppState) => state.articles.list;
  const list = yield select(getList);

  const id = list.length ? list[list.length - 1].id + 1 : 1;

  const newArticle = {
    id,
    title,
    content,
  };

  yield put(setOpenArticle(id));
  yield put(setCreateArticle(newArticle));
}

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
