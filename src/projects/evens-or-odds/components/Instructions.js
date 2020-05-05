import React from "react";
import { connect } from "react-redux";
import {
  expandedInstructions,
  collapseInstructions,
} from "../actions/settings.js";

const Instructions = (props) => {
  const { instructionsExpanded ,expandedInstructions,collapseInstructions} = props;
  if (instructionsExpanded)
    return (
      <div>
        <h3>Instructions</h3>

        <p>Welcome to evens or odds.The game goes like this </p>
        <p>
          The deck is huffled. Then choose :will the next card be even or odd?
        </p>
        <p>Make a coice on every draw, and see how many you get right</p>
        <p>(Face cards don't count)</p>
        <br />
        <button onClick={collapseInstructions}>Show less</button>
      </div>
    );

  return (
    <div>
      <h3>Instructions</h3>

      <p>Welcome to evens or odds .The game like this...</p>
      <button onClick={expandedInstructions}>Read more</button>
    </div>
  );
 };

const mapStateToProps = (state) => {
  return {
    instructionsExpanded: state.settingsReducer.instructionsExpanded,
  };
};

const connectedComponent = connect(mapStateToProps,{expandedInstructions,collapseInstructions});
export default connectedComponent(Instructions);
