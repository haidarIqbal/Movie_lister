import React, { Component } from "react";
import TableBody from "./tableBody";
import TableHeader from "./tableHeader";
const Table = ({ columns, sortColumn, onSort, movies }) => {
  return (
    <table className="table table-striped">
      <TableHeader sortColumn={sortColumn} onSort={onSort} columns={columns} />
      <TableBody columns={columns} movies={movies} />
    </table>
  );
};

export default Table;
