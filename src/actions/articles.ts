import { put, takeEvery, select } from 'redux-saga/effects'

import {
  ARTICLE_SET_CREATE,
  ARTICLE_SET_OPEN,
  ARTICLE_DELETE,
  ARTICLE_CREATE,
  IArticle,
  SetCreateArticleAction,
  CreateArticleAction,
  OpenArticleAction,
  DeleteArticleAction
} from 'types/articlesTypes';
import { IAppState } from 'types';


export const setCreateArticle = (payload: IArticle): SetCreateArticleAction => ({
  type: ARTICLE_SET_CREATE,
  payload,
});

  
export const setOpenArticle = (id: number): OpenArticleAction => ({
  type: ARTICLE_SET_OPEN,
  id,
});


export const deleteArticle = (id: number): DeleteArticleAction => ({
  type: ARTICLE_DELETE,
  id,
})

export const createArticle = (title: string, content: string) => ({
  type: ARTICLE_CREATE,
  title,
  content
})

export function* watchCreateArticle() {
  yield takeEvery(ARTICLE_CREATE, functionCreateArticle);
}

export function* functionCreateArticle(action: CreateArticleAction) {
  const { title, content } = action;

  const getList = (state: IAppState) => state.articles.list;
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
