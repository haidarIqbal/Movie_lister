import React, { Component } from "react";
import _ from "lodash";
class TableBody extends Component {
  renderCell = (item, column) => {
    if (column.content) return column.content(item);
    return _.get(item, column.path);
  };
  render() {
    const { movies, columns } = this.props;
    return (
      <tbody>
        {movies.map((movie) => {
          return (
            <tr key={movie._id || movie.id}>
              {columns.map((column) => {
                return (
                  <td key={column.path || column.key}>
                    {this.renderCell(movie, column)}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    );
  }
}

export default TableBody;
