import { GOALS } from '../actions/GoalsActions';

const initialState = {
  list: [],
  isLoading: false
};

function goalsReducer(state = initialState, action) {
  switch (action.type) {
    case GOALS.FETCH.START:
      return {
        ...state,
        isLoading: true
      };
    case GOALS.FETCH.SUCCESS:
      return {
        ...state,
        list: action.goals,
        isLoading: false
      };
    case GOALS.FETCH.FAILURE:
      return {
        ...state,
        isLoading: false
      };
    default:
      return state;
  }
}

export default goalsReducer;
