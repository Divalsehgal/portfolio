import { types } from "../actions/types";

export const fetchDeckresult = (deck_json) => {
  const { deck_id } = deck_json;
  return { type: types.FETCH_DECK_RESULT, deck_id };
};
export const fetchDeckerror = (error) => {
  return { type: types.FETCH_DECK_ERROR, message: error.message };
};

export const fetchCarderror = (error) => {
  return { type: types.FETCH_CARD_ERROR, message: error.message };
};

export const fetchNewDeck = () => (dispatch) => {
  fetch(`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`).then(
    (response) => {
      if (response.status !== 200) {
        throw new Error("Unsuccessfull reuqest");
      }
      return response.json()
    }
  ).then((json) => dispatch(fetchDeckresult(json)))
    .catch((error) => dispatch(fetchDeckerror(error)));
};

export const fetchCardresult = (result_json) => {
  const { code, image, value, suit } = result_json;
  return { type: types.FETCH_CARD_RESULT, code, image, value, suit };
};

export const fetchNewCard = (deck_id) => (dispatch) => {
  fetch(`https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`)
    .then((response) =>  {
      if (response.status !== 200) {
        throw new Error("Unsuccessfull reuqest");
      }
      return response.json()
    })
    .then((json) => dispatch(fetchCardresult(json.cards[0])))
    .catch((error)=>dispatch(fetchCarderror(error)))
};
