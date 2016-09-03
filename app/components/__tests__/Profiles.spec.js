/* eslint-disable */
import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import { keyBy, random } from 'lodash';
import sinon from 'sinon';
import generate from '../../testUtils/fixtures';
import { Profiles } from '../Profiles';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

describe('Profiles List', () => {
  let component;
  const profiles = generate('profile', 15);
  const mockedProfiles = keyBy(profiles, 'username');
  let mockedActions;
  let profileListSpy;
  let routerSpy;

  beforeEach(() => {
    profileListSpy = sinon.spy();
    routerSpy = sinon.spy();
    mockedActions = {
      profileList: profileListSpy,
    };
    const context = {
      router: {
        push: routerSpy,
      },
      muiTheme: getMuiTheme()
    };
    const childContextTypes = {
      muiTheme: React.PropTypes.object
    };

    component = mount(
      <Profiles profiles={mockedProfiles} actions={mockedActions}/>,
      {
        context,
        childContextTypes
      });
  });

  it('renders without problems', () => {
    expect(component).to.exist;
  });

  it('renders the list of profiles', () => {
    const listItems = component.find('ListItem');
    expect(listItems.length).to.equal(profiles.length);
  });

  it('componentDidMount call the profileList fetch', () => {
    expect(profileListSpy.callCount).to.equal(1);
  });

  it('router push to profile view on handleProfileSelect', () => {
    const index = random(profiles.length - 1);
    const profile = profiles[index];
    const profileElement = component.find('Profiles');
    profileElement.node.handleProfileSelect(profile.username);
    const expectedRoute = `/profiles/${profile.username}`;
    expect(routerSpy.getCall(0).args[0]).to.equal(expectedRoute);
  });
});
