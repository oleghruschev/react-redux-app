// import { Action } from 'redux';
export const ARTICLE_CREATE = 'ARTICLE_CREATE';
export const ARTICLE_DELETE = 'ARTICLE_DELETE';
export const ARTICLE_SET_OPEN = 'ARTICLE_SET_OPEN';
export const ARTICLE_SET_CREATE = 'ARTICLE_SET_CREATE';

export interface IArticle {
  id: number,
  title: string,
  content: string
}


export interface IArticles {
  list: IArticle[],
  openArticle: number
}

export interface CreateArticleAction {
  type: typeof ARTICLE_CREATE,
  title: string,
  content: string
}

export interface SetCreateArticleAction {
  type: typeof ARTICLE_SET_CREATE
  payload: IArticle
}

export interface OpenArticleAction {
  type: typeof ARTICLE_SET_OPEN,
  id: number
}

export interface DeleteArticleAction {
  type: typeof ARTICLE_DELETE,
  id: number
}

export type ArticlesActionTypes = SetCreateArticleAction | OpenArticleAction | DeleteArticleAction
