import * as UserConstants from '../actions/user/UserConstants';
import userReducerFunctions from '../actions/user/UserReducerFunctions';

function userReducer(state = userReducerFunctions.getDefaultState(), action) {
  switch (action.type) {
    case UserConstants.USER_LOGIN:
      return userReducerFunctions.userLogin(state, action);
    case UserConstants.USER_LOGOUT:
      return userReducerFunctions.userLogout(state, action);
    default:
      return state;
  }
}

export default userReducer;
