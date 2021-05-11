import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import Pagination from "../common/Pagination";
import { paginate, getFiltered } from "../utils/Paginate";
import ListGroup from "./ListGroups";
import MoviesTable from "./moviesTable";
import { Link } from "react-router-dom";
import _ from "lodash";
import SearchBox from "../common/searchBox";
class ShowMovies extends Component {
  state = {
    movies: [],
    generes: [],
    pageSize: 4,
    currentPage: 1,
    selectedGenere: null,
    sortColumn: { path: "title", order: "asc" },
    searchQuery: "",
  };
  componentDidMount() {
    const geners = [{ _id: "", name: "All Geners" }, ...getGenres()];
    this.setState({ movies: getMovies(), generes: geners });
  }

  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies });
  };

  handleToggle = (likedMovie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(likedMovie);
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };
  handleSelect = (genere) => {
    this.setState({ selectedGenere: genere, currentPage: 1 });
  };
  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  handleSearch = (query) => {
    this.setState({ searchQuery: query, selectedGenere: null, currentPage: 1 });
  };
  render() {
    const { totalCount, movies } = getFiltered(this.state);
    const { sortColumn, selectedGenere } = this.state;
    return (
      <div className="container">
        <br />
        <div className="row">
          <div className="col-sm-3">
            <ListGroup
              items={this.state.generes}
              selectedItem={selectedGenere}
              onItemSelected={this.handleSelect}
            />
          </div>
          <div className="col">
            <Link to="/movie/new">
              <button className="btn btn-primary">Add new Movie</button>
            </Link>
            <br />
            <br />
            <SearchBox
              onchange={this.handleSearch}
              value={this.state.searchQuery}
            />

            <span>Showing movies {totalCount}</span>

            <MoviesTable
              movies={movies}
              sortColumn={sortColumn}
              onLike={this.handleToggle}
              handleDelete={this.handleDelete}
              onSort={this.handleSort}
            />

            <Pagination
              pages={totalCount}
              onPageChange={this.handlePageChange}
              currentPage={this.state.currentPage}
              pageSize={this.state.pageSize}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ShowMovies;
