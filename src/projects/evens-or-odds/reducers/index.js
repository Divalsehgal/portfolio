import { types } from "../actions/types";
import fetchState from "./fetchStates";
import { combineReducers } from "redux";
import settingsReducer from "./settings";
import deckReducer from "./deck";
import guessStateReducer from "./guessState";

export default combineReducers({
  deckReducer: deckReducer,
  settingsReducer: settingsReducer,
  guessStateReducer: guessStateReducer,
});
