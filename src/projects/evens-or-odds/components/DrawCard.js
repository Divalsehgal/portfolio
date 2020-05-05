import React from "react";
import { connect } from "react-redux";
import { fetchNewCard } from "../actions/deck";

const DrawCard = (props) => {
  return (
    <div>
      <button onClick={(e) => props.fetchNewCard(props.deck_id)}>
        Draw the next card!
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    deck_id: state.deckReducer.deck_id,
  };
};
export default connect(mapStateToProps, { fetchNewCard })(DrawCard);
