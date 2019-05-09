import React, { Component } from "react";
import "./App.css";
import "./Movie";
import Movie from "./Movie";

class App extends Component {
  state = {};

  componentDidMount() {
    this._getMovies();
  }

  _getMovies = async () => {
    const movies = await this._callApi();
    this.setState({
      movies
    });
  };

  _callApi = async () => {
    return fetch(
      "https://yts.am/api/v2/list_movies.json?sort_by=download_count"
    )
      .then(response => response.json())
      .then(json => json.data.movies)
      .catch(err => console.log(err));
  };

  _renderMovies = () => {
    const movie = this.state.movies.map((movie, index) => {
      console.log(movie);
      return (
        <Movie
          title={movie.title_english}
          poster={movie.medium_cover_image}
          genres={movie.genres}
          synopsis={movie.synopsis}
          key={index}
        />
      );
    });
    return movie;
  };

  // _callApi = async () => {
  //   try {
  //     const movieData = await fetch(
  //       "https://yts.am/api/v2/list_movies.json?sort_by=download_count"
  //     );
  //     const movieJSON = await movieData.json();
  //     const movies = movieJSON.data.movies;
  //     return movies;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  render() {
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : "Loading"}
      </div>
    );
  }
}

export default App;
