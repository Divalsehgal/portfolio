import { types } from "../actions/types";

const DEFAULT_USERNAME = "Anonymous";

export const usernameReducer = (state = DEFAULT_USERNAME, action) => {
  switch (action.type) {
    case types.SET_USER_NAME:
      return {
        username: action.username,
      };

    default:
      return state;
  }
};

export default usernameReducer;