import { expect } from 'chai';
import Immutable from 'immutable';
import userReducerFunctions from '../UserReducerFunctions';
import UserActionCreators from '../UserActionCreators';
import generate from '../../../testUtils/fixtures';

describe('User Reducer Functions', () => {
  const defaultState = {
    isLoggedIn: false,
    userData: {
      id: null,
      fullName: null,
      isAdmin: false,
      picture: null,
      firstName: null,
      lastName: null,
      email: null,
      username: null
    }
  };

  it('should return the user reducer default state', () => {
    expect(userReducerFunctions.getDefaultState().toJS()).to.deep.equal(defaultState);
  });

  it('should return the user state with the isLogged true and the user data', () => {
    const fakeUser = generate('user', 1)[0];
    const state = Immutable.fromJS(defaultState);
    const action = UserActionCreators.userLogin(fakeUser);

    const expectedValue = Object.assign({}, defaultState, {
      isLoggedIn: true,
      userData: fakeUser
    });
    expect(userReducerFunctions.userLogin(state, action).toJS()).to.deep.equal(expectedValue);
  });

  it('should return the user state with the isLogged false and the user data empty', () => {
    const fakeUser = generate('user', 1)[0];
    const state = Immutable.fromJS({
      isLoggedIn: true,
      userData: fakeUser
    });
    const action = UserActionCreators.userLogout();
    expect(userReducerFunctions.userLogout(state, action).toJS()).to.deep.equal(defaultState);
  });
});
