import React, { Component } from 'react';

let styles = {};

class UserCard extends Component {
  handleProfileSelect(userId) {
    this.props.router.push(`/profiles/${userId}`);
  }

  render() {
    const { user } = this.props;

    return (
      <div className="user" onClick={() => this.handleProfileSelect(user.id)} style={styles.user}>
        <img style={styles.avatar} src={user.picture} alt={user.firstName} />
        <div style={styles.name}>{user.fullName}</div>
      </div>
    );
  }
}

UserCard.propTypes = {
  user: React.PropTypes.object.isRequired,
  router: React.PropTypes.object.isRequired,
};

styles = {
  user: {
    width: '180px',
    position: 'relative',
    margin: '30px',
    cursor: 'pointer',
  },
  avatar: {
    width: '100%',
    height: '180px',
    borderRadius: '100px',
  },
  name: {
    position: 'absolute',
    width: '80%',
    backgroundColor: '#413c4f',
    margin: '0 auto',
    textAlign: 'center',
    bottom: 0,
    left: '5%',
    color: '#f3f2f6',
    padding: '10px',
    borderRadius: '5px',
    fontFamily: 'Roboto, sans-serif',
    fontSize: '16px',
  },
};

export default UserCard;
