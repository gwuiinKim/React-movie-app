import React, { Component } from "react";
import "./Movie.css";

class Movie extends Component {
  render() {
    return (
      <div>
        <MoviePoster />
        <h1>hello this is a movie</h1>
      </div>
    );
  }
}

class MoviePoster extends Component {
  render() {
    return (
      <img src="https://target.scene7.com/is/image/Target/GUEST_907f740a-7888-4cb0-9081-80ecada58e3a?wid=488&hei=488&fmt=pjpeg" />
    );
  }
}

export default Movie;
