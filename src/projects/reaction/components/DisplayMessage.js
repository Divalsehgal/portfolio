import React from "react";
import { connect } from "react-redux";
import CreateReaction from "./CreateReaction";
const MessageReaction=({messageReactions})=>{
if(!messageReactions)return null;
return (
  messageReactions.map((reaction,index)=>{
    const {id,emoji,username}=reaction;
    return (
    <span key={id}><em>{username}:</em>{emoji}{index !==messageReactions.length-1 ? ',':null}</span>
    )
  })
)
}
const DisplayMessage = ({messages,reaction}) => {
  return (
    <div>
      {messages.map((msg) => {
        const { id, text, timestamp, username } = msg;
        return (
          <div key={id}>
            <h4>{new Date(timestamp).toLocaleString()}</h4>
            <p>{text}</p> <h3>-{username}</h3>
            <CreateReaction messageId={id}/>
            <MessageReaction messageReactions={reaction[id]}/>
          </div>
        );
      })}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    messages: state.messageReducer.items,
    reaction:state.reactionReducer
  };
};
export default connect(mapStateToProps, {})(DisplayMessage);
