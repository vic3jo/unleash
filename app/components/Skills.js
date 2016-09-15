import React, { Component } from 'react';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import Loading from './Loading';

class Skills extends Component {
  componentDidMount() {
    this.props.actions.skillList();
  }

  handleSkillSelect(skillSlug) {
    this.props.router.push(`/skills/${skillSlug}`);
  }

  render() {
    const { skills } = this.props;

    if (skills.isLoading || skills.list === null) {
      return <Loading />;
    }

    return (
      <List>
        {Object.keys(skills.list).map(skill => (
          <ListItem
            key={skills.list[skill].id}
            primaryText={skill}
            onTouchTap={() => this.handleSkillSelect(skills.list[skill].slug)}
          />
        ))}
      </List>
    );
  }
}

Skills.propTypes = {
  actions: React.PropTypes.object.isRequired,
  skills: React.PropTypes.object.isRequired,
  router: React.PropTypes.object.isRequired,
};

export default Skills;
