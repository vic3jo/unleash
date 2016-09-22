import { SKILL_LIST_START, SKILL_LIST_SUCCESS, SKILL_LIST_FAILURE } from '../actions/SkillActions';

const initialState = {
  list: null,
  isLoading: false,
};

function skillsReducer(state = initialState, action) {
  const skills = {};
  switch (action.type) {
    case SKILL_LIST_START:
      return {
        ...state,
        list: null,
        isLoading: true,
      };
    case SKILL_LIST_SUCCESS:
      action.skills.forEach((skill) => {
        skills[skill.name] = skill;
      });
      return {
        ...state,
        list: skills,
        isLoading: false,
      };
    case SKILL_LIST_FAILURE:
      return {
        ...state,
        list: null,
        isLoading: false,
      };
    default:
      return state;
  }
}

export default skillsReducer;
