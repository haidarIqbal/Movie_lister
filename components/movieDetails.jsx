import React from "react";
const MovieDetails = ({ match, history }) => {
  return (
    <div className="container">
      <h1>Movie -{match.params.id}</h1>
      <button
        className="btn btn-success"
        onClick={() => history.push("/movies")}
      >
        Save
      </button>
    </div>
  );
};

export default MovieDetails;
