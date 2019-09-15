import { put, select, takeEvery } from 'redux-saga/effects'

import { IAppState } from 'types';
import {
  ARTICLE_CREATE,
  ARTICLE_DELETE,
  ARTICLE_SET_CREATE,
  ARTICLE_SET_OPEN,
  IArticle,
  ICreateArticleAction,
  IDeleteArticleAction,
  IOpenArticleAction,
  ISetCreateArticleAction,
} from 'types/articlesTypes';


export const setCreateArticle = (payload: IArticle): ISetCreateArticleAction => ({
  type: ARTICLE_SET_CREATE,
  payload,
});

  
export const setOpenArticle = (id: number): IOpenArticleAction => ({
  type: ARTICLE_SET_OPEN,
  id,
});


export const deleteArticle = (id: number): IDeleteArticleAction => ({
  type: ARTICLE_DELETE,
  id,
})

export const createArticle = (title: string, content: string): ICreateArticleAction  => ({
  type: ARTICLE_CREATE,
  title,
  content
})

export function* watchCreateArticle() {
  yield takeEvery(ARTICLE_CREATE, functionCreateArticle);
}

export function* functionCreateArticle(action: ICreateArticleAction) {
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
