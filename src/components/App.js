import React, { Component } from "react";
import Projects from "./Projects";
import SocialProfiles from "./SocialProfiles";
import Title from "./title";
import profilepicture from "../assets/profilepicture.jpeg";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayBio: false,
    };
  }

  toggleChange = (e) => {
    e.preventDefault();
    this.setState({ displayBio: !this.state.displayBio });
  };
  render() {
    return (
      <div>
        <img alt="profilepic" src={profilepicture} className="profile" />
        <h1>Hello</h1>
        <p>My name is Dival</p>
        <Title />
        {this.state.displayBio === true ? (
          <div>
            <p>I live in Banglore and I code everyday</p>
            <p>
              My favorite language is javascript and i think React.js is awesome
            </p>
            <p>Besides coding,I also love traveling and hiking</p>
            <button onClick={this.toggleChange}>show less</button>
          </div>
        ) : (
          <div>
            <button onClick={this.toggleChange}>read more</button>
          </div>
        )}
        <hr />
        <Projects />
        <hr />
        <SocialProfiles />
     
      </div>
    );
  }
}

export default App;
