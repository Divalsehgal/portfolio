import { REACTION_OBJECT } from "../actions/types";

 const REACTION_TYPE = REACTION_OBJECT.map(
  (REACTION_OBJECT) => REACTION_OBJECT.type
);

const DEFAULT_REACTION = {};
const reactionReducer = (state = DEFAULT_REACTION, action) => {
  if (REACTION_TYPE.includes(action.type)) {
    const { messageId } = action.item;
    const messageReactions = state[messageId];
    if (messageReactions) {
      return {
        ...state,
        [messageId]: [...messageReactions, action.item]
      }
    }
    return {
      ...state,
      [messageId]: [action.item]
    };
  }
  return state;
};

export default reactionReducer;
