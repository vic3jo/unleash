/* eslint-disable */
import React from 'react';
import sinon from 'sinon';
import { mount } from 'enzyme';
import { expect } from 'chai';
import Login from '../Login';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

describe('Login Component', () => {
  let component;
  let userLoginProcess = sinon.spy();

  beforeEach(() => {
    const context = {
      muiTheme: getMuiTheme()
    };
    const childContextTypes = {
      muiTheme: React.PropTypes.object
    };

    component = mount(
      <Login userLoginProcess={userLoginProcess} />,
      {
        context,
        childContextTypes
      });
  });

  it('should render without problems', () => {
    expect(component).to.exist;
  });

  it('should call the userLoginProcess function on login button click', () => {
    const loginButton = component.find('button');
    loginButton.simulate('click');
    expect(userLoginProcess).to.have.property('callCount', 1)
  });
});
