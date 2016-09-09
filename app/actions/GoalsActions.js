import config from '../../config';

export const GOALS = {
  FETCH: {
    START: 'FETCH_GOALS_START',
    SUCCESS: 'FETCH_GOALS_SUCCESS',
    FAILURE: 'FETCH_GOALS_FAILURE'
  }
};

export function fetchGoals() {
  return (dispatch) => {
    dispatch({ type: GOALS.FETCH.START });

    return fetch(config.goals_api_url)
      .then(response => response.json())
      .then(goals => dispatch({ type: GOALS.FETCH.SUCCESS, goals }))
      .catch(errors => dispatch({ type: GOALS.FETCH.FAILURE, errors }));
  };
}
