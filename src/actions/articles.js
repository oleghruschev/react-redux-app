import * as actionTypes from 'actions/actionTypes';

const setCreateArticle = (article) => ({
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
  

export const createArticle = (title, content) => (dispatch, getState) => {
  const list = getState().articles.list;
  const id = list.length
    ? list[list.length - 1].id + 1
    : 1
  const newArticle = {
    id,
    title,
    content,
  }

  dispatch(setOpenArticle(id));
  dispatch(setCreateArticle(newArticle));
};
