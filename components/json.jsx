import Axios from "axios";
import React, { Component } from "react";
import Pagination from "../common/Pagination";
import Table from "../common/table";
import { getFiltered, paginate } from "../utils/Paginate";
class JSONP extends Component {
  state = {
    movies: [],
    sortColumn: { path: "title", order: "asc" },
    pageSize: 5,
    currentPage: 1,
    selectedGenere: "",
    columns: [
      { path: "title", label: "title" },
      {
        key: "update",
        content: () => <button className="btn btn-info">Update</button>,
      },
      {
        key: "delete",
        content: () => <button className="btn btn-danger">Delete</button>,
      },
    ],
  };

  async componentDidMount() {
    const { data: movies } = await Axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    this.setState({ movies });
  }
  handleSort = () => {};
  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };
  render() {
    const { totalCount } = getFiltered(this.state);
    const showingMovies = paginate(
      this.state.movies,
      this.state.currentPage,
      this.state.pageSize
    );
    const { columns, sortColumn } = this.state;

    return (
      <div className="container">
        <Table
          movies={showingMovies}
          columns={columns}
          sortColumn={sortColumn}
          onSort={this.handleSort}
        />
        <Pagination
          pages={totalCount}
          onPageChange={this.handlePageChange}
          currentPage={this.state.currentPage}
          pageSize={this.state.pageSize}
        />
      </div>
    );
  }
}

export default JSONP;
