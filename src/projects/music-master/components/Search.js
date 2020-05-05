import React, { Component } from "react";

export default class Search extends Component {
    state = {
        artistQuery: "",
       
      };
      
    updateArtistQuery = (e) => {
        this.setState({ artistQuery: e.target.value });
      };
    
      
      handleKeyPress = (e) => {
        if (e.key === "Enter") {
          this.props.searchArtist();
        }
      };
       searchArtist=()=>{
           this.props.searchArtist(this.state.artistQuery)
       }
  render() {
    return (
      <div>
        <input
          onKeyPress={this.handleKeyPress}
          onChange={this.updateArtistQuery}
          placeholder="Search for an Artist!"
        />
        <button onClick={this.searchArtist}>Search</button>
      </div>
    );
  }
}
