import { ARTICLE_SET_CREATE } from './actionTypes';

export const setCreateArticle = (article) => ({
  type: ARTICLE_SET_CREATE,
  article,
});

export const createArticle = (title, content) => (dispatch, getState) => {
  const list = getState().articles.list;
  const id = list.length
    ? list[list.length - 1].id + 1
    : 0
  const newArticle = {
    id,
    title,
    content,
  }

  dispatch(setCreateArticle(list));
}
