import * as UserConstants from './UserConstants';

const userLogin = (userData) => ({
  type: UserConstants.USER_LOGIN,
  userData
});

const userLogout = () => ({
  type: UserConstants.USER_LOGOUT,
});

export default {
  userLogin,
  userLogout
};
