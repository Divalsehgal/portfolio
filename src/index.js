import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { Router, Switch, Route} from "react-router-dom";
import Jokes from "./components/Jokes";
import createBrowserHistory from "history/createBrowserHistory";
import Header from "./components/Header";
import MusicMaster from "./projects/music-master"
import EvensOrOdds from "./projects/evens-or-odds"
import Reaction from "./projects/reaction"
ReactDOM.render(
  <Router history={createBrowserHistory()}>
    <Switch>
      <Route exact path="/" render={()=><Header><App/></Header>} />
      <Route path="/jokes" render={()=><Header><Jokes/></Header>} />
    
      <Route path="/music-master" render={()=><Header><MusicMaster/></Header>} />
      <Route path="/evens-or-odds" render={()=><Header><EvensOrOdds/></Header>} />
      <Route path="/reaction" render={()=><Header><Reaction/></Header>} />

</Switch>
  </Router>,

  document.getElementById("root")
);

// new Promise(resolve=>{
// setTimeout(()=>{
// console.log("0")
// resolve()
// },2000)
// }).then(()=>
// {
//     console.log("1");
// }
// )

// setTimeout(() => {
//   console.log("0");
// }, 2000);

// console.log("1");
