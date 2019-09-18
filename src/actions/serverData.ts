import { call, put, select, takeEvery } from 'redux-saga/effects';

import { IAppState } from 'types';
import * as types from 'types/serverDataTypes';

const BASE_URL = 'http://jsonplaceholder.typicode.com';

const setLoadingStatus = (status: boolean): types.ISetLoadingStatusAction => ({
  type: types.SET_LOADING_STATUS,
  status,
});

const setUserInfo = (payload: types.IUserInfo): types.ISetUserInfoAction => ({
  type: types.SET_USER_INFO,
  payload,
});

const setPostsInfo = (payload: types.IPost[]): types.ISetPostInfoAction => ({
  type: types.SET_POSTS_INFO,
  payload,
});

export const resetData = (): types.IResetDataAction => ({
  type: types.RESET_DATA_FROM_SERVER,
});

export const getUserInfoById = (id: number): types.IGetUserInfoByIdAction => ({
  type: types.FETCHED_USER_INFO,
  id,
});

export const getPostsInfo = (): types.IGetPostInfoAction => ({
  type: types.FETCHED_POSTS_INFO,
});

export function* watchFetcInfoFromServer() {
  yield takeEvery(types.FETCHED_USER_INFO, fetchUserInfoAsync);
  yield takeEvery(types.FETCHED_POSTS_INFO, fetchPostsInfoAsync);
}

function* fetchUserInfoAsync(action: types.IGetUserInfoByIdAction) {
  try {
    yield put(resetData());
    yield put(setLoadingStatus(true));
    const data = yield call(() =>
      fetch(`${BASE_URL}/users/${action.id}`).then(response => response.json())
    );
    yield put(setUserInfo(data));
    yield put(setLoadingStatus(false));
  } catch (error) {
    console.error(error);
    yield put(setLoadingStatus(false));
  }
}

function* fetchPostsInfoAsync() {
  try {
    const getUserId = (state: IAppState) => state.serverData.userInfo.id;
    const userId: number = yield select(getUserId);

    yield put(setLoadingStatus(true));
    const data = yield call(() =>
      fetch(`${BASE_URL}/posts?userId=${userId}`).then(response =>
        response.json()
      )
    );
    yield put(setPostsInfo(data));
    yield put(setLoadingStatus(false));
  } catch (error) {
    console.error(error);
    yield put(setLoadingStatus(false));
  }
}
