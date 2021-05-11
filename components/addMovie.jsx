import React from "react";
import Form from "../common/form";
import { getMovie, saveMovie } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import Joi from "joi-browser";
class AddMovie extends Form {
  state = {
    data: {
      title: "",
      genreId: "",
      numberInStock: "",
      dailyRentalRate: "",
    },
    genres: [],
    errors: {},
  };
  schema = {
    _id: Joi.string(),
    title: Joi.string().required().label("Title"),
    genreId: Joi.string().required().label("Genre"),
    numberInStock: Joi.string().required().label("Number in Stock"),
    dailyRentalRate: Joi.string().required().label("Daily Rental Rate"),
  };
  componentDidMount() {
    const genres = getGenres();
    this.setState({ genres });
    const movieId = this.props.match.path;
    if (movieId === "/movie/new") return;

    const movie = getMovie(movieId);
    if (!movie) return this.props.history.replace("/not-found");

    this.setState({ data: this.mapToViewModel(movie) });
  }

  mapToViewModel(movie) {
    return {
      _id: movie._id,
      title: movie.title,
      genreId: movie.genre._id,
      numberInStock: movie.numberInStock,
      dailyRentalRate: movie.dailyRentalRate,
    };
  }
  doSubmit() {
    saveMovie(this.state.data);
    this.props.history.push("/movies");
  }
  render() {
    return (
      <div>
        <h1>Movie form</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("title", "Title", "text")}
          {this.renderSelect("genreId", "Genre", this.state.genres)}
          {this.renderInput("numberInStock", "Stock", "number")}
          {this.renderInput("dailyRentalRate", "Rate", "number")}
          {this.renderButton("Add movie")}
        </form>
      </div>
    );
  }
}

export default AddMovie;
