import React, { Component } from 'react';
import Loading from './Loading';
import { find, every, some, values, map } from 'lodash';
import UserCard from './UserCard';

let styles = {};

class Skill extends Component {
  componentDidMount() {
    this.props.actions.skillList();
    this.props.actions.profileList();
    this.props.actions.profileListBySkill(this.props.params.slug);
  }

  getSkillBySlug(skills = {}, slug) {
    return find(values(skills), ['slug', slug]);
  }

  getProfilesInIds(profiles = {}, ids = []) {
    return values(profiles).filter((profile) => ids.indexOf(profile.id) > -1);
  }

  renderList(profiles) {
    if (profiles.length === 0) {
      return <p style={styles.empty}>No profiles yet with this skill.</p>;
    }

    return map(profiles, (profile) =>
      <UserCard user={profile} router={this.props.router} key={profile.id} />
    );
  }

  render() {
    const { skills, profiles, profilesBySkill } = this.props;
    const isLoading = some([skills.isLoading, profiles.isLoading, profilesBySkill.isLoading]);
    const allLoaded = every([skills.list, profiles.list, profilesBySkill.profiles]);

    if (isLoading || !allLoaded) {
      return <Loading />;
    }

    const skill = this.getSkillBySlug(skills.list, this.props.params.slug);
    const skilled = this.getProfilesInIds(profiles.list, profilesBySkill.profiles);

    return (
      <div>
        <div style={styles.skillHeader}>
          <div style={styles.divider}></div>
          <div>{skill.name}</div>
          <div style={styles.divider}></div>
        </div>
        <div style={styles.profiles}>
          {this.renderList(skilled)}
        </div>
      </div>
    );
  }
}

Skill.propTypes = {
  actions: React.PropTypes.object.isRequired,
  skills: React.PropTypes.object.isRequired,
  profiles: React.PropTypes.object.isRequired,
  profilesBySkill: React.PropTypes.object.isRequired,
  params: React.PropTypes.object.isRequired,
  router: React.PropTypes.object.isRequired,
};

styles = {
  skillHeader: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    maxWidth: '1150px',
    margin: '40px auto 0',
    padding: '0 40px',
    textAlign: 'center',
    fontFamily: 'Inconsolata, cursive',
    fontWeight: 'lighter',
    fontSize: '26px',
    textTransform: 'capitalize',
    color: '#969696',
  },
  divider: {
    flexGrow: 1,
    backgroundColor: '#ebebeb',
    height: '1px',
    alignSelf: 'center',
    margin: '0 20px',
  },
  empty: {
    color: '#969696',
    textAlign: 'center',
    marginTop: '40px'
  },
  profiles: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    maxWidth: '1024px',
    margin: '0 auto',
  }
};

export default Skill;
