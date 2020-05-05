import messageReducer from "./messages";
import { combineReducers } from "redux";
import usernameReducer from "./username";
import reactionReducer from "./reaction";

export default combineReducers({
    messageReducer:messageReducer,
    usernameReducer:usernameReducer,
    reactionReducer:reactionReducer
});
