import React from "react";
import PropTypes from "prop-types";
import LinesEllipsis from "react-lines-ellipsis";

import "./Movie.css";

function Movie({ title, poster, genres, synopsis }) {
  return (
    <div className="Movie">
      <div className="Movie__Column">
        <MoviePoster poster={poster} alt={title} />
      </div>

      <div className="Movie__Column">
        <h1 className="Movie__Title">{title}</h1>
        <div className="Movie__Genres">
          {genres.map((genre, index) => {
            return <MovieGenre genre={genre} key={index} />;
          })}
        </div>
        <div className="Movie__Synopsis">
          <LinesEllipsis
            text={synopsis}
            maxLine="3"
            ellipsis="..."
            trimRight
            basedOn="letters"
          />
        </div>{" "}
      </div>
    </div>
  );
}

function MovieGenre({ genre }) {
  return <span className="Movie__Genre">{genre} </span>;
}

function MoviePoster({ poster, alt }) {
  return <img src={poster} alt={alt} title={alt} className="Movie__Poster" />;
}

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired,
  synopsis: PropTypes.string.isRequired
};

MoviePoster.propTypes = {
  poster: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};

MovieGenre.proptype = {
  genre: PropTypes.string.isRequired
};

export default Movie;
