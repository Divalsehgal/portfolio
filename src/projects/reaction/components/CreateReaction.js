import React, { Component } from "react";
import { PubSubContext } from "../pubsub";
import  {connect} from "react-redux"
import {reaction} from "../actions/reaction"
import { REACTION_OBJECT } from "../actions/types";
class CreateReaction extends Component {
  publishReaction = ({ type, emoji }) => () => {
    const { username, messageId } = this.props;
    this.context.pubsub.publish(reaction({type, emoji, username, messageId}));
  };
  render() {
    return (
      <div>
        {REACTION_OBJECT.map((REACTION) => {
          const { type, emoji } = REACTION;
          return (
            <span
              onClick={this.publishReaction({ type, emoji })}
              style={{ margin: 5, cursor: "pointer" }}
              key={type}
            >
              {emoji}
            </span>
          );
        })}
      </div>
    );
  }
  static contextType = PubSubContext;
}
const mapStateToProps = (state) => {
return {  username: state.usernameReducer.username}
};
export default connect(mapStateToProps, {})(CreateReaction);
