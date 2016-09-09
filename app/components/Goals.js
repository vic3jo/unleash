import React, { Component } from 'react';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';

class Goals extends Component {
  componentDidMount() {
    this.props.actions.fetchGoals();
  }

  render() {
    const { goals: { list } } = this.props;
    return (
      <List>
        {list.map(goal => (
          <ListItem
            key={goal.id}
            primaryText={goal.name}
          />
        ))}
      </List>
    );
  }
}

Goals.propTypes = {
  actions: React.PropTypes.object.isRequired,
  goals: React.PropTypes.object.isRequired,
};

export default Goals;
