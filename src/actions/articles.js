import { ARTICLE_SET_CREATE } from './actionTypes';

export const setCreateArticle = (list) => ({
  type: ARTICLE_SET_CREATE,
  list,
});

export const createArticle = (title, content) => (dispatch, getState) => {
  const list = getState().articles.list.slice();
  const id = list.length
    ? list[list.length - 1].id + 1
    : 0
  const newArticle = {
    id,
    title,
    content,
  }

  list.push(newArticle)

  dispatch(setCreateArticle(list));
}
