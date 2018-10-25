import { USER_SET_NAME } from './actionTypes';

export const confirmName = (name) => ({
  type: USER_SET_NAME,
  name,
});
