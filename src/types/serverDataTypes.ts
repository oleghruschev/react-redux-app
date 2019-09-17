export const SET_USER_INFO = 'SET_USER_INFO';
export const SET_POSTS_INFO = 'SET_POSTS_INFO';
export const FETCHED_USER_INFO = 'FETCHED_USER_INFO';
export const FETCHED_POSTS_INFO = 'FETCHED_POSTS_INFO';
export const SET_LOADING_STATUS = 'SET_LOADING_STATUS';
export const RESET_DATA_FROM_SERVER = 'RESET_DATA_FROM_SERVER';


export interface IUserInfo {
  id: number | string,
  name: string,
  email: string,
  phone: string
}

export interface IPost {
  id: number,
  title: string,
  body: string
}

export interface IServerData {
  isLoading: boolean,
  userInfo: IUserInfo,
  postsInfo: IPost[]
}

// actions
export interface ISetLoadingStatusAction {
  type: typeof SET_LOADING_STATUS,
  status: boolean
}

export interface ISetUserInfoAction {
  type: typeof SET_USER_INFO,
  payload: IUserInfo
}

export interface ISetPostInfoAction {
  type: typeof SET_POSTS_INFO,
  payload: IPost[]
}

export interface IResetDataAction {
  type: typeof RESET_DATA_FROM_SERVER
}

export interface IGetUserInfoByIdAction {
  type: typeof FETCHED_USER_INFO,
  id: number
}

export interface IGetPostInfoAction {
  type: typeof FETCHED_POSTS_INFO
}

export type ServerDataActionTypes = 
  ISetLoadingStatusAction |
  ISetUserInfoAction |
  ISetPostInfoAction |
  IResetDataAction |
  IGetUserInfoByIdAction |
  IGetPostInfoAction;
