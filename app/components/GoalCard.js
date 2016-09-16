import React, { Component } from 'react';
import Paper from 'material-ui/Paper';

let styles = {};

class GoalCard extends Component {
  /**
   * Calculate days left for Due Date.
   * @param {String} date - Date from API.
   * @returns {number} days left.
   */
  daysLeft = (date) => {
    const due = new Date(date).getTime();
    const now = Date.now();

    return Math.round(Math.max(0, (due - now) / (24 * 3600 * 1000)));
  };

  render() {
    const { goal } = this.props;
    const achieved = goal.achieved;
    const dueDays = goal.dueDate ? this.daysLeft(goal.dueDate) : 0;
    const goalStyle = Object.assign({}, styles.goal, achieved && styles.achieved);

    return (
      <Paper key={goal.id} style={goalStyle} zDepth={2}>
        <i className={goal.icon} style={styles.icon} />
        <span style={styles.title}>{goal.name}</span>
        <div style={styles.details}>
          <span style={styles.level}>Lvl {goal.level}</span>
          <div style={Object.assign({}, styles.status, achieved && styles.achieved)}>
            <i className={achieved ? 'icon-checkmark' : 'icon-hour-glass'} />
          </div>
          <span style={styles.dueDate}><i className="icon-history" /> {dueDays}</span>
        </div>
      </Paper>
    );
  }
}

GoalCard.propTypes = {
  goal: React.PropTypes.object.isRequired,
};

styles = {
  goal: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    width: '280px',
    height: '240px',
    margin: '20px 20px 50px',
    padding: '20px',
    textAlign: 'center',
    color: '#5f5f5f',
  },
  icon: {
    display: 'block',
    fontSize: '100px',
    marginTop: '20px',
  },
  title: {
    display: 'flex',
    flexGrow: '1',
    alignItems: 'center',
    alignSelf: 'center',
    fontSize: '22px',
    fontWeight: '200',
    padding: '5px',
    marginTop: '10px'
  },
  details: {
    color: '#ffffff',
    position: 'absolute',
    bottom: '-15px',
    left: '25%',
    height: '30px',
    width: '50%',
    backgroundColor: '#5f5f5f',
    borderRadius: '50px',
  },
  level: {
    float: 'left',
    lineHeight: '30px',
    width: '50px',
    textTransform: 'uppercase',
    fontSize: '12px',
  },
  status: {
    position: 'absolute',
    left: '33%',
    width: '40px',
    height: '40px',
    lineHeight: '43px',
    textAlign: 'center',
    color: '#ffffff',
    fontSize: '18px',
    borderRadius: '50px',
    backgroundColor: '#909090',
    borderColor: '#ffffff',
    margin: '-8px auto 0',
    borderWidth: '4px',
    borderStyle: 'solid',
  },
  dueDate: {
    float: 'right',
    lineHeight: '30px',
    width: '50px',
    textAlign: 'center',
    textTransform: 'uppercase',
    fontSize: '12px',
  },
  achieved: {
    backgroundColor: '#8FD694',
    color: '#ffffff',
  },
};

export default GoalCard;
