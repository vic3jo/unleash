import React, { PropTypes } from 'react';
import unleashLogo from '../assets/logo.png';
import Paper from 'material-ui/Paper';

let styles = {};

const Login = ({ userLoginProcess }) => (
  <div style={styles.principalContainerStyle}>
    <Paper zDepth={3} style={styles.paperStyle}>
      <img src={unleashLogo} style={styles.logoStyle} alt="Unleash Logo" />
      <h1 style={styles.headerStyle}>Unleash your potential</h1>
      <button style={styles.buttonStyle} onClick={() => userLoginProcess()}>Login</button>
    </Paper>
  </div>
);

Login.propTypes = {
  userLoginProcess: PropTypes.func,
};

styles = {
  principalContainerStyle: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '40px',
    justifyContent: 'center',
  },
  paperStyle: {
    padding: '30px',
    width: '60%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  headerStyle: {
    fontFamily: 'Inconsolata',
    color: '#f54e45',
  },
  logoStyle: {
    width: '200px'
  },
  buttonStyle: {
    background: '#d14836',
    color: '#fff',
    width: 190,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 2,
    border: '1px solid transparent',
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Inconsolata',
    cursor: 'pointer'
  },
};

export default Login;
