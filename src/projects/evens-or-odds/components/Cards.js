import React from "react";
import { connect } from "react-redux";
const Cards = (props) => {
  if (!props.image) return null;
 return (
    <div>
        <p>{props.value} of {props.suit}</p>
      <img src={props.image} alt="card-image" />
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    image: state.deckReducer.image,
    suit: state.deckReducer.suit,
    code: state.deckReducer.code,
    value:state.deckReducer.value
  };
};
export default connect(mapStateToProps, {})(Cards);
