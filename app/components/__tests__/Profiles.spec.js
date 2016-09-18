/* eslint-disable */
import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import { keyBy, random } from 'lodash';
import sinon from 'sinon';
import generate from '../../testUtils/fixtures';
import Profiles from '../Profiles';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

describe('Profiles List', () => {
  let component;
  const profiles = generate('profile', 15);
  const mockedProfiles = { list: keyBy(profiles, 'username') };
  let mockedActions;
  let profileListSpy;
  let routerSpy;

  beforeEach(() => {
    profileListSpy = sinon.spy();
    routerSpy = sinon.spy();
    mockedActions = {
      profileList: profileListSpy,
    };
    const router = {
      push: routerSpy,
    };
    const context = {
      muiTheme: getMuiTheme()
    };
    const childContextTypes = {
      muiTheme: React.PropTypes.object
    };

    component = mount(
      <Profiles
        profiles={mockedProfiles}
        actions={mockedActions}
        router={router}
      />,
      {
        context,
        childContextTypes
      });
  });

  it('should render without problems', () => {
    expect(component).to.exist;
  });

  it('should render the list of profiles', () => {
    const listItems = component.find('UserCard');
    expect(listItems.length).to.equal(profiles.length);
  });

  it('should fetch the profiles lists when component is mounted', () => {
    expect(profileListSpy.callCount).to.equal(1);
  });
});
