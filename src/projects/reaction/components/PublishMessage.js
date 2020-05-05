import React, { Component } from "react";
import { PubSubContext } from "../pubsub"
import { newMessage } from "../actions/messages";
import {connect} from "react-redux"

class PublishMessage extends Component {
  state = {
    text: "",
  };
  updateText = (event) => {
    this.setState({ text: event.target.value });
  };
  publishMessage=()=>{
      this.context.pubsub.publish(newMessage({text:this.state.text,username:this.props.username}))
  }
  handleKeyPress=()=>{
      if(event.key==='enter')
      this.publishMessage()
  }
  render() {
    return (
      <div>
        <h3>Got something to say?</h3>
        <input onChange={this.updateText} onKeyPress={this.handleKeyPress} />
        <button onClick={this.publishMessage}>publish it !</button>
      </div>
    );
  }
  static contextType=PubSubContext
}
//PublishMessage.contextType=PubSubContext




const mapStateToProps=(state)=>{
return {
  username:state.usernameReducer.username
}
}
export default connect(mapStateToProps,{})(PublishMessage);
