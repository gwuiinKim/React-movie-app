import React from "react";
import PropTypes from "prop-types";

import "./Movie.css";

function Movie({ title, poster, genres, synopsis }) {
  return (
    <div className="Movie">
      <div className="Movie__columns">
        <MoviePoster poster={poster} />
      </div>

      <div className="Movie__columns">
        <h1 className="Movie__title">{title}</h1>
        <div className="Movie__genres">
          {genres.map((genre, index) => {
            return <MovieGenre genre={genre} key={index} />;
          })}
        </div>
        <p className="Movie__synopsis">{synopsis}</p>
      </div>
    </div>
  );
}

function MovieGenre({ genre }) {
  return <span className="Movie__genre">{genre} </span>;
}

function MoviePoster({ poster }) {
  return <img src={poster} alt="" />;
}

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired,
  synopsis: PropTypes.string.isRequired
};

MoviePoster.propTypes = {
  poster: PropTypes.string.isRequired
};

MovieGenre.proptype = {
  genre: PropTypes.string.isRequired
};

export default Movie;
