import { expect } from 'chai';
import * as UserConstants from '../UserConstants';
import UserActionCreators from '../UserActionCreators';
import generate from '../../../testUtils/fixtures';

describe('User Action Creators', () => {
  it('should create an action for user login', () => {
    const userData = generate('user', 1)[0];
    const expectedAction = {
      type: UserConstants.USER_LOGIN,
      userData
    };
    expect(UserActionCreators.userLogin(userData)).to.deep.equal(expectedAction);
  });

  it('should create an action for user logout', () => {
    const expectedAction = {
      type: UserConstants.USER_LOGOUT,
    };
    expect(UserActionCreators.userLogout()).to.deep.equal(expectedAction);
  });
});
