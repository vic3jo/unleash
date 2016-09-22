/**
 * Unleash
 * @author X-Team 2016 <http://www.x-team.com>
 * @author Kelvin De Moya <kelvin.demoya@x-team.com>
 */

import config from '../../config';
import { createAction } from 'redux-act';

export const doPathsList = createAction('PATHS_LIST');
export const pathsListSuccess = createAction('PATHS_LIST_SUCCESS', (paths) => ({ paths }));
export const pathsListFailure = createAction('PATHS_LIST_FAILURE', (errors) => ({ errors }));

export function pathsList(userId) {
  return (dispatch) => {
    dispatch(doPathsList());

    return fetch(config.paths_api_url + userId)
      .then(response => response.json())
      .then(paths => dispatch(pathsListSuccess(paths)))
      .catch(errors => dispatch(pathsListFailure(errors)));
  };
}
