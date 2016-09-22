/* eslint-disable */
import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import generate from '../../testUtils/fixtures';
import * as PathsActions from '../PathsActions';
import nock from 'nock';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import config from '../../config/routes';

describe('Path Actions', () => {

  it('should create an action for pathsListSuccess', () => {
    const paths = '/unleash/paths';
    expect(PathsActions.pathsListSuccess(paths)).to.deep.equal(PathsActions.pathsListSuccess.raw(paths));
  });

  it('should create an action for pathsListFailure', () => {
    const errors = 'Oops an error!';
    expect(PathsActions.pathsListFailure(errors)).to.deep.equal(PathsActions.pathsListFailure.raw(errors));
  });

  describe('Dispatch Actions', () => {
    const middlewares = [thunk];
    const store = configureStore(middlewares)();
    const dispatch = store.dispatch;

    afterEach(() => {
      store.clearActions();
      nock.cleanAll();
    });

    it('should call the dispatcher for pathsList', () => {
      const userId = 150;
      const hostname = 'http://paths-staging.unleash.x-team.com';
      const path = `/api/v1/paths.json?userId=${userId}`;

      const httpResponse = generate('path', 15, userId);
      const requestCall = nock(hostname).get(path).reply(200, httpResponse);

      const expectedActions = [
        PathsActions.doPathsList.raw(),
        PathsActions.pathsListSuccess(httpResponse)
      ];

      return dispatch(PathsActions.pathsList(userId)).then(() => {
        expect(requestCall.isDone()).to.be.true;
        expect(store.getActions()).to.deep.equal(expectedActions);
      });
    });

  });

});
