import { types } from "../actions/types";
const DEFAULT_SETTINGS = {
  gameStarted: false,
  instructionsExpanded: false,
};
const settingsReducer = (state = DEFAULT_SETTINGS, action) => {
  switch (action.type) {
    case types.SET_GAME_STARTED:
      return {
        ...state,
        gameStarted: action.gameStarted,
      };
    case types.SET_INSTRUCTIONS_EXPANDED:
      return {
        ...state,
        instructionsExpanded: action.instructionsExpanded,
      };

    default:
      return state;
  }
};

export default settingsReducer;
