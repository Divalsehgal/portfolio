import { types } from "../actions/types";

const DEFAULT_GUESS = {
  guess: "",
  correctGuess: 0,
};

const EVEN = ["2", "4", "6", "8", "0"];
const ODD = ["1", "3", "5", "7", "9"];
const guessStateReducer = (state = DEFAULT_GUESS, action) => {
  switch (action.type) {
    case types.SET_GAME_GUESS:
      return {
        ...state,
        guess: action.guess,
      };
    case types.SET_GAME_STARTED:
      return DEFAULT_GUESS;

    case types.FETCH_CARD_RESULT:
      const  value  = action.value;
      const { guess, correctGuess } = state;
      if (
        (guess == "even" && EVEN.includes(value)) ||
        (guess == "odd" && ODD.includes(value))
      ) {
        return {
          ...state,
          correctGuess: correctGuess + 1,
        };
      }
      return state;

    default:
      return state;
  }
};
export default guessStateReducer;
