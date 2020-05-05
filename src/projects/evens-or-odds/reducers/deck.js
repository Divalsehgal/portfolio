import { types } from "../actions/types";
import fetchState from "./fetchStates";
const DEFAULT_DECK = {
deck_id:"",message:"",fetchState:""
};
const deckReducer = (state = DEFAULT_DECK, action) => {
  switch (action.type) {
    case types.FETCH_DECK_RESULT:
      return {
        ...state,
        deck_id: action.deck_id,
        fetchState: fetchState.success,
      };
    case types.FETCH_DECK_ERROR:
      return {
        ...state,
        message: action.message,
        fetchState: fetchState.error,
      };
      case types.FETCH_CARD_ERROR:
        return {
          ...state,
          message: action.message,
          fetchState: fetchState.error,
        };
    case types.FETCH_CARD_RESULT:
      return {
        ...state,
        image: action.image,
        suit: action.suit,
        code: action.code,
        value: action.value,
        fetchState: fetchState.success,

      };
    default:
      return state;
  }
};

export default deckReducer;
