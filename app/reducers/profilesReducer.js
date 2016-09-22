import {
  PROFILE_LIST_START,
  PROFILE_LIST_SUCCESS,
  PROFILE_LIST_FAILURE
} from '../actions/ProfileActions';

const initialState = {
  list: null,
  isLoading: false,
};

function profilesReducer(state = initialState, action) {
  const profiles = {};
  switch (action.type) {
    case PROFILE_LIST_START:
      return {
        ...state,
        list: null,
        isLoading: true,
      };
    case PROFILE_LIST_SUCCESS:
      if (action.profiles.Count) {
        action.profiles.Items.forEach((profile) => {
          profiles[profile.username] = profile;
        });
      }
      return {
        ...state,
        list: profiles,
        isLoading: false,
      };
    case PROFILE_LIST_FAILURE:
      return {
        ...state,
        list: null,
        isLoading: false,
      };
    default:
      return state;
  }
}

export default profilesReducer;
