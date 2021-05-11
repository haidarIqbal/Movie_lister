import _ from "lodash";

export function paginate(items, pageNumber, pageSize) {
  console.log(items, pageNumber, pageSize);
  const startIndex = (pageNumber - 1) * pageSize;

  return _(items).slice(startIndex).take(pageSize).value();
}

export function getFiltered(props) {
  const {
    movies: allMovies,
    currentPage,
    pageSize,
    sortColumn,
    searchQuery,
    selectedGenere,
  } = props;
  let filtered = allMovies;
  if (searchQuery) {
    filtered = allMovies.filter((m) =>
      m.title.toLowerCase().startsWith(searchQuery.toLowerCase())
    );
  } else if (selectedGenere) {
    filtered =
      selectedGenere && selectedGenere._id
        ? allMovies.filter((m) => m.genre._id === selectedGenere._id)
        : allMovies;
  } else {
    filtered = allMovies.filter((m) => m.title.toLowerCase());
  }
  const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
  const movies = paginate(sorted, currentPage, pageSize);
  return { totalCount: filtered.length, movies };
}
