import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({year, title, summary, poster, genres}){
    return (
    <div class="movies_movie">
        <img src={poster} alt={title} title={title} />
    <div class="movie_data">
        <h3 class="movie_title">{title}</h3>
        <h5 class="movie_year">{year}</h5>
        <ul className="genres">
            {genres.map((genre, index) => (
            <li key={index} className="genres_genre">{genre}</li>
            ))}
        </ul>
        <h5 class="movie_genre">{genres}</h5>
        <p class="movie_summary">{summary}</p>
    </div>
</div>)
}

Movie.propTypes= {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;