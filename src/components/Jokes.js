import React, { Component } from "react";
const Joke = ({ joke: { setup, punchline } }) => (
  <p style={{ margin: 20 }}>
    {setup}
    <em>{punchline}</em>
  </p>
);

export default class Jokes extends Component {
  state = {
    joke: {},
    jokes: [],
  };
  componentDidMount() {
    fetch("https://official-joke-api.appspot.com/random_joke")
      .then((response) => response.json())
      .then((json) => this.setState({ joke: json }))
      .catch((error) => alert(error.message));
  }
  fetchjokes = () => {
    fetch("https://official-joke-api.appspot.com/random_ten")
      .then((response) => response.json())
      .then((json) => this.setState({ jokes: json }))
      .catch((error) => alert(error.message));
  };
  render() {
    return (
      <div>
        <h2>Highlighted Joke</h2>
        <Joke joke={this.state.joke} />
        <hr />
        <h2>want ten new jokes</h2>
        <button onClick={this.fetchjokes}>Fetch jokes</button>
        {this.state.jokes.map((item) => (
          <Joke key={item.id} joke={item} />
        ))}
      </div>
    );
  }
}
