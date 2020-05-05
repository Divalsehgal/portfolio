import { types } from "./types";
export const setEvenGuess = () => {
  return {
    type: types.SET_GAME_GUESS,
    guess: "even",
  };
};

export const setOddGuess = () => {
  return {
    type: types.SET_GAME_GUESS,
    guess: "odd",
  };
};
