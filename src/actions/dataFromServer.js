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

export const getUserInfoById = (id) => (dispatch) => {
  dispatch(resetData())
  dispatch(setLoadingStatus(true))
  
  fetch(`${baseUrl}/users/${id}`)
    .then(response => response.json())
    .then(data => {
      dispatch(setUserInfo(data))
      dispatch(setLoadingStatus(false))
    })
    .catch(error => {
      console.error(error)
      dispatch(setLoadingStatus(false))
    })     
}

export const getPostsInfo = () => (dispatch, getState) => {
  const userId = getState().dataFromServer.userInfo.id
  dispatch(setLoadingStatus(true))

  fetch(`${baseUrl}/posts?userId=${userId}`)
    .then(response => response.json())
    .then(data => {
      dispatch(setPostsInfo(data))
      dispatch(setLoadingStatus(false))
    })
    .catch(error => {
      dispatch(setLoadingStatus(false))
      console.error(error)
    })     
}
