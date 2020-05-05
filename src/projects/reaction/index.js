import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import PubSub, { PubSubContext } from "./pubsub";
import rootReducer from "./reducers/index";
import { newMessage } from "./actions/messages";
const store = createStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
const pubsub = new PubSub();

pubsub.addListener({
  message: (messageObject) => {
    const { message, channel } = messageObject;
    console.log("recieved message", message, "channel", channel);
    store.dispatch(message);
  },
});
store.subscribe(() => console.log('store.getState()', store.getState()));

setTimeout(() => {
  pubsub.publish(newMessage({text:"hello world",username:"dival"}));
}, 1000);

const Reaction=()=>{
  return (
<Provider store={store}>
    <PubSubContext.Provider value={{ pubsub }}>
      <App />
    </PubSubContext.Provider>
  </Provider>)
}
export default Reaction;
