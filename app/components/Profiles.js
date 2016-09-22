import React, { Component } from 'react';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';

class Profiles extends Component {
  componentDidMount() {
    this.props.actions.profileList();
  }

  handleProfileSelect(userId) {
    this.props.router.push(`/profiles/${userId}`);
  }

  render() {
    const profiles = this.props.profiles.list;
    return (
      <List>
        {Object.keys(profiles).map(username => (
          <ListItem
            key={profiles[username].id}
            primaryText={profiles[username].fullName}
            onTouchTap={() => this.handleProfileSelect(profiles[username].id)}
          />
        ))}
      </List>
    );
  }
}

Profiles.propTypes = {
  actions: React.PropTypes.object.isRequired,
  profiles: React.PropTypes.object.isRequired,
  router: React.PropTypes.object.isRequired,
};

export default Profiles;
