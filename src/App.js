import React, { Component } from "react";
import "./App.css";
import "./Movie";
import Movie from "./Movie";

class App extends Component {
  state = {
    movies: [
      {
        title: "inception",
        poster:
          "https://is1-ssl.mzstatic.com/image/thumb/Video4/v4/86/ac/14/86ac14f2-8c9b-2a5a-80be-49b8ee402228/pr_source.lsr/268x0w.png"
      },
      {
        title: "avatar",
        poster:
          "https://www.screengeek.net/wp-content/uploads/2018/11/avatar-movie.jpg"
      },
      {
        title: "avengers",
        poster:
          "https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg"
      }
    ]
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        movies: [
          ...this.state.movies,
          {
            title: "iron man",
            poster:
              "https://is1-ssl.mzstatic.com/image/thumb/Video128/v4/89/74/cf/8974cfa0-5e27-1c5e-390a-e97e5d12a51d/contsched.rdzrzprk.lsr/268x0w.jpg"
          }
        ]
      });
    }, 3000);
  }

  render() {
    const movie = this.state.movies.map((movie, index) => {
      return <Movie title={movie.title} poster={movie.poster} key={index} />;
    });
    return <div className="App">{movie}</div>;
  }
}

export default App;
