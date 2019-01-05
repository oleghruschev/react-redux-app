import { put, call, takeEvery, select } from 'redux-saga/effects'

import * as actionTypes from 'constants/actionTypes';

const baseUrl = 'http://jsonplaceholder.typicode.com';

const setLoadingStatus = (status) => ({
  type: actionTypes.SET_LOADING_STATUS,
  status
})

const setUserInfo = (payload) => ({
  type: actionTypes.SET_USER_INFO,
  payload
})

const setPostsInfo = (payload) => ({
  type: actionTypes.SET_POSTS_INFO,
  payload
})

export const resetData = () =>  ({
  type: actionTypes.RESET_DATA_FROM_SERVER
})

export const getUserInfoById = (id) => ({
  type: actionTypes.FETCHED_USER_INFO,
  id
})

export const getPostsInfo = () => ({
  type: actionTypes.FETCHED_POSTS_INFO
})

export function* watchFetcInfoFromServer() {
  yield takeEvery(actionTypes.FETCHED_USER_INFO, fetchUserInfoAsync);
  yield takeEvery(actionTypes.FETCHED_POSTS_INFO, fetchPostsInfoAsync);
}

function* fetchUserInfoAsync(action) {
  try {
    yield put(resetData());
    yield put(setLoadingStatus(true))
    const data = yield call(() => (
      fetch(`${baseUrl}/users/${action.id}`)
        .then(response => response.json())
    ))
    yield put((setUserInfo(data)))
    yield put(setLoadingStatus(false))
  }
  catch (error) {
    console.error(error)
    yield put(setLoadingStatus(false))
  }    
}

function* fetchPostsInfoAsync() {
  try {
    const getUserId = (state) => state.dataFromServer.userInfo.id;
    let userId = yield select(getUserId)

    yield put(setLoadingStatus(true))
    const data = yield call(() => (
      fetch(`${baseUrl}/posts?userId=${userId}`)
      .then(response => response.json())
    ))
    yield put(setPostsInfo(data));
    yield put(setLoadingStatus(false))
  }
  catch (error) {
    console.error(error)
    yield put(setLoadingStatus(false))
  }     
}
