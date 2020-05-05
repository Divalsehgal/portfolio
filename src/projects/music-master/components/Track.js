import React, { Component } from "react";

export default class Track extends Component {
  state = {
    playing: false,
    audio: null,
    playinPreviewUrl: null,
  };

  playAudio = (preview_Url) => () => {
    const audio = new Audio(preview_Url);
    if (!this.state.playing) {
      audio.play();
      this.setState({
        playing: true,
        audio: audio,
        playinPreviewUrl: preview_Url,
      });
    } else {
      this.state.audio.pause();
      if (this.state.playinPreviewUrl === preview_Url) {
        this.setState({ playing: false });
      } else {
        audio.play();
        this.setState({ audio: audio, playinPreviewUrl: preview_Url });
      }
    }
  };
  trackIcon = (track) => {
    if (!track.preview_url) {
      return <span>N/A</span>;
    }
    if (
      this.state.playing &&
      this.state.playinPreviewUrl === track.preview_url
    ) {
      return <span>| |</span>;
    }
    return <span>&#9654;</span>;
  };
  render() {
    const { tracks } = this.props;

    return (
      <div style={{ height: 50, width: 50, margin: 10, display: "inline" }}>
        {tracks.map((track) => {
          const { id, name, album, preview_url } = track;
          return (
            <div
              className="track"
              key={id}
              onClick={this.playAudio(preview_url)}
            >
              <img
                className="track-image"
                alt="song-pic"
                src={album.images[0].url}
              />
              <p className="track-text">{name}</p>
              <p className="track-icon">{this.trackIcon(track)}</p>{" "}
            </div>
          );
        })}
      </div>
    );
  }
}
