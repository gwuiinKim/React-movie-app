import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./Movie";
import Movie from "./Movie";

const movies = ["inception", "avatar", "avengers"];

const moviePosters = [
  "https://is1-ssl.mzstatic.com/image/thumb/Video4/v4/86/ac/14/86ac14f2-8c9b-2a5a-80be-49b8ee402228/pr_source.lsr/268x0w.png",
  "https://www.screengeek.net/wp-content/uploads/2018/11/avatar-movie.jpg",
  "https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg"
];

function App() {
  return (
    <div className="App">
      <Movie title={movies[0]} poster={moviePosters[0]} />
      <Movie title={movies[1]} poster={moviePosters[1]} />
      <Movie title={movies[2]} poster={moviePosters[2]} />
    </div>
  );
}

export default App;
