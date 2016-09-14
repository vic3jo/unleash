/* eslint-disable */
import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import generate from '../../testUtils/fixtures';
import GoalCard from '../GoalCard';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

describe('Goal Card', () => {
  let component;
  const goal = generate('goal');
  const mockedData = { goal: goal };

  beforeEach(() => {
    const context = {
      muiTheme: getMuiTheme()
    };
    const childContextTypes = {
      muiTheme: React.PropTypes.object
    };

    component = mount(
      <GoalCard goal={mockedData} />,
      {
        context,
        childContextTypes
      });
  });

  it('should render without problems', () => {
    expect(component).to.exist;
  });

  it('should render the goal', () => {
    const goal = component.find('Paper');
    expect(goal.length).to.equal(goal.length);
  });
});
