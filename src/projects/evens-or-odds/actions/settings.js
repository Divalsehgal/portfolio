import {types} from "../actions/types"

export const startGame = () => {
  return {
    type: types.SET_GAME_STARTED,
    gameStarted: true,
  };
};
export const cancelGame = () => {
  return {
    type: types.SET_GAME_STARTED,
    gameStarted: false,
  };
};

export const expandedInstructions = () => {
  return {
    type: types.SET_INSTRUCTIONS_EXPANDED,
    instructionsExpanded: true,
  };
};

export const collapseInstructions = () => {
  return {
    type: types.SET_INSTRUCTIONS_EXPANDED,
    instructionsExpanded: false,
  };
};
