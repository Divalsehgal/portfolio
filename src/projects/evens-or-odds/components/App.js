import React, { Component } from "react";
import { connect } from "react-redux";
import { startGame, cancelGame } from "../actions/settings";
import { setEvenGuess, setOddGuess } from "../actions/guess";
import { fetchNewDeck } from "../actions/deck";
import fetchStates from "../reducers/fetchStates";
import Instructions from "./Instructions";
import DrawCard from "./DrawCard";
import Cards from "./Cards";

const correctGuessRecordKey = "CORRECT_GUESS_9";
const checkrecord = (correctGuess) => {
  const record = Number(localStorage.getItem(correctGuessRecordKey));
  if (correctGuess > record) {
    localStorage.setItem(correctGuessRecordKey, correctGuess);
    return { record: correctGuess, isNewRecord: true };
  }
  return {
    record,
    isNewRecord: false,
  };
};
class App extends Component {
  startGame = () => {
    this.props.startGame();
    this.props.fetchNewDeck();
  };

  
  render()

  {
    const { record, isNewRecord } = checkrecord(this.props.correctGuess)
    if (this.props.fetchState === fetchStates.error) {
      return (
        <div>
          <p>Please try reloading the app. An error occured</p>
          <p>{this.props.message}</p>
        </div>
      );
    }

    
    return (
      <div>
        <h2>♥ ♠ Evens Or Odds ♣ ♦</h2>
        {this.props.gameStarted ? (
          <div>
            <h3>A new game is on</h3>
            <p>
              Record:{record}
            </p>
            <p>{this.props.correctGuess} guesses</p>
            <h2>Will it be even or odd?</h2>
            <button
              style={
                this.props.guess === "even"
                  ? { border: "2px solid #43a047" }
                  : null
              }
              onClick={(e) => this.props.setEvenGuess()}
            >
              even
            </button>
            &nbsp;&nbsp;
            <button
              style={
                this.props.guess === "odd"
                  ? { border: "2px solid #43a047" }
                  : null
              }
              onClick={(e) => this.props.setOddGuess()}
            >
              odd
            </button>
            <hr />
            <DrawCard />
            <hr />
            <Cards />
            <hr />
            <button onClick={this.props.cancelGame}>Cancel game</button>
          </div>
        ) : (
          <div>
            <h3>A new game awaits</h3>
            <br />
            <button onClick={this.startGame}>Start a game</button>
            <hr />
            <Instructions />
          </div>
        )}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    gameStarted: state.settingsReducer.gameStarted,
    instructionExpanded: state.settingsReducer.instructionsExpanded,
    deck_id: state.deckReducer.deck_id,
    image: state.deckReducer.image,
    fetchState: state.deckReducer.fetchState,
    message: state.deckReducer.message,
    guess: state.guessStateReducer.guess,
    correctGuess: state.guessStateReducer.correctGuess,
  };
};

const connectedComponent = connect(mapStateToProps, {
  startGame,
  cancelGame,
  fetchNewDeck,
  setOddGuess,
  setEvenGuess,
});
export default connectedComponent(App);
