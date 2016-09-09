import { combineReducers } from 'redux';
import skillsReducer from './skillsReducer';
import goalsReducer from './goalsReducer';
import profilesReducer from './profilesReducer';
import pathsReducer from './pathsReducer';

const rootReducer = combineReducers({
  skills: skillsReducer,
  goals: goalsReducer,
  profiles: profilesReducer,
  paths: pathsReducer
});

export default rootReducer;
