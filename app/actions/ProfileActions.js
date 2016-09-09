import config from '../../config';

export const PROFILE_LIST = 'PROFILE_LIST';
export const PROFILE_LIST_SUCCESS = 'PROFILE_LIST_SUCCESS';
export const PROFILE_LIST_FAILURE = 'PROFILE_LIST_FAILURE';
export const FETCH_PROFILE_START = 'FETCH_PROFILE_START';
export const FETCH_PROFILE_SUCCESS = 'FETCH_PROFILE_SUCCESS';
export const FETCH_PROFILE_FAILURE = 'FETCH_PROFILE_FAILURE';

function doProfileList() {
  return { type: PROFILE_LIST };
}

function fetchProfileStart() {
  return { type: FETCH_PROFILE_START };
}

function fetchProfileSuccess(profile) {
  return { type: FETCH_PROFILE_SUCCESS, profile };
}

function fetchProfileFailure(error) {
  return { type: FETCH_PROFILE_FAILURE, error };
}

export function profileListSuccess(profiles) {
  return { type: PROFILE_LIST_SUCCESS, profiles };
}

export function profileListFailure(errors) {
  return { type: PROFILE_LIST_FAILURE, errors };
}

export function fetchProfile(id) {
  return (dispatch) => {
    dispatch((fetchProfileStart()));

    return fetch(`${config.profiles_api_url}/${id}`)
      .then(response => response.json())
      .then(profile => dispatch(fetchProfileSuccess(profile)))
      .catch(error => dispatch(fetchProfileFailure(error)));
  };
}

export function profileList() {
  return (dispatch) => {
    dispatch(doProfileList());

    return fetch(config.profiles_api_url)
      .then(response => response.json())
      .then(profiles => dispatch(profileListSuccess(profiles)))
      .catch(errors => dispatch(profileListFailure(errors)));
  };
}
