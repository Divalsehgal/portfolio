import React, { Component } from "react";
import PublishMessage from "./PublishMessage";
import DisplayMessage from "./DisplayMessage";
import SetUserName from "./SetUserName";

export default class App extends Component {
  render() {
    return (
      <div>
        <h2>Reaction</h2>
        <SetUserName />
        <hr />
        <PublishMessage />
        <hr />
        <DisplayMessage />
      </div>
    );
  }
}
