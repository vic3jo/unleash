/**
 * Unleash | pathsReducer.js
 * @author X-Team 2016 <http://www.x-team.com>
 * @author Kelvin De Moya <kelvin.demoya@x-team.com>
 */

import { createReducer } from 'redux-act';
import { pathsListSuccess, pathsListFailure } from '../actions/PathsActions';

export default createReducer({
  [pathsListSuccess]: (state, payload) => payload.paths.filter((path) => path.goals.length),
  [pathsListFailure]: () => []
}, []);
