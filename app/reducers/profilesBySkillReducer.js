import {
  PROFILE_LIST_BY_SKILL_START,
  PROFILE_LIST_BY_SKILL_SUCCESS,
  PROFILE_LIST_BY_SKILL_FAILURE
} from '../actions/ProfileActions';

const initialState = {
  profiles: null,
  isLoading: false,
};

function skillReducer(state = initialState, action) {
  switch (action.type) {
    case PROFILE_LIST_BY_SKILL_START:
      return {
        ...state,
        profiles: null,
        isLoading: true,
      };
    case PROFILE_LIST_BY_SKILL_SUCCESS:
      return {
        ...state,
        profiles: action.skill.Count > 0 ? action.skill.Items.map((item) => item.userId) : [],
        isLoading: false,
      };
    case PROFILE_LIST_BY_SKILL_FAILURE:
      return {
        ...state,
        profiles: null,
        isLoading: false,
      };
    default:
      return state;
  }
}

export default skillReducer;
