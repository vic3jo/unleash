import React, { Component } from 'react';
import UserCard from './UserCard';
import _ from 'lodash';

let styles = {};

class Profiles extends Component {
  componentDidMount() {
    this.props.actions.profileList();
  }

  renderProfiles(profiles) {
    return _.map(profiles, (profile) =>
      <UserCard user={profile} router={this.props.router} key={profile.id} />
    );
  }

  render() {
    const profiles = this.props.profiles.list;
    return (
      <div style={styles.profiles}>
        {this.renderProfiles(profiles)}
      </div>
    );
  }
}

Profiles.propTypes = {
  actions: React.PropTypes.object.isRequired,
  profiles: React.PropTypes.object.isRequired,
  router: React.PropTypes.object.isRequired,
};

styles = {
  profiles: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    maxWidth: '1024px',
    margin: '0 auto',
  }
};

export default Profiles;
