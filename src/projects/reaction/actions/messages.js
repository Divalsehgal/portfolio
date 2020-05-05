import { types } from "./types";
import { uuid } from 'uuidv4';
export const newMessage = ({text,username}) => {
  return {
    type: types.NEW_MESSAGE,
    item: { text,username, timestamp: Date.now(),id:uuid()},
  };
};
