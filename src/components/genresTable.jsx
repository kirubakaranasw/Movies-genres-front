import React, { Component } from "react";
import { Link } from "react-router-dom";
import Table from "./common/table";

class GenresTable extends Component {
  columns = [
    {
      path: "name",
      label: "Name",
      content: movie => <Link to={`/movies/${movie._id}`}>{movie.name}</Link>
    }
  ];

  render() {
    const { movies, onSort, sortColumn } = this.props;
    return (
      <Table
        columns={this.columns}
        data={movies}
        onSort={onSort}
        sortColumn={sortColumn}
      />
    );
  }
}

export default GenresTable;
