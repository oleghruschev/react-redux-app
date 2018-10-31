import Immutable, { initialState } from 'immutable';

import reducer from '../articles';
import { setCreateArticle, setOpenArticle, deleteArticle } from 'actions/articles';


describe('Reduser: articles tests', () => {
  const newState = {
    list: [{
      id: 1,
      title: 'title',
      content: 'content'
    }],
    openArticle: 0,
  }

  it('Should return initial state', () => {
    expect(reducer(initialState, {})).toEqual({
      list: [],
      openArticle: 0,
    });
  });

  it('Should added new articles', () => {
    const article = {
      id: 1,
      title: 'title',
      content: 'content'
    };
    const newArticle = {
      id: 2,
      title: 'newTitle',
      content: 'newContent'
    };

    expect(reducer(initialState, setCreateArticle(article))).toEqual(newState);

    expect(reducer(newState, setCreateArticle(newArticle))).toEqual({
      list: [{
        id: 1,
        title: 'title',
        content: 'content'
      },
      {
        id: 2,
        title: 'newTitle',
        content: 'newContent'
      }],
      openArticle: 0,
    });
  });

  it('Should deleted articles', () => {
    expect(reducer(newState, deleteArticle(1))).toEqual({
      list: [],
      openArticle: 0,
    })
  })

  it('Should update data at open article', ()  => {
    expect(reducer(initialState, setOpenArticle(5))).toEqual({
      list: [],
      openArticle: 5,
    });
  })
})
