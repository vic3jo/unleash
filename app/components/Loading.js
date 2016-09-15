import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';

let styles = {};

const Loading = () => (
  <div style={styles.loading}>
    <CircularProgress color="#E57373" />
  </div>
);

styles = {
  loading: {
    textAlign: 'center',
    marginTop: '60px',
  }
};

export default Loading;
