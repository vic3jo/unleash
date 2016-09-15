import config from '../../config';

export const SKILL_LIST_START = 'SKILL_LIST_START';
export const SKILL_LIST_SUCCESS = 'SKILL_LIST_SUCCESS';
export const SKILL_LIST_FAILURE = 'SKILL_LIST_FAILURE';

function skillListStart() {
  return { type: SKILL_LIST_START };
}

export function skillListSuccess(skills) {
  return { type: SKILL_LIST_SUCCESS, skills };
}

export function skillListFailure(errors) {
  return { type: SKILL_LIST_FAILURE, errors };
}

export function skillList() {
  return (dispatch) => {
    dispatch(skillListStart());

    return fetch(config.skills_api_url)
      .then(response => response.json())
      .then(skills => dispatch(skillListSuccess(skills)))
      .catch(errors => dispatch(skillListFailure(errors)));
  };
}
