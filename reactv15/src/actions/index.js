import axios from "axios";

export function loadColor() {
  return (dispatch) => {
    return axios
      .get(
        "https://api.themoviedb.org/3/discover/movie?api_key=f7b67d9afdb3c971d4419fa4cb667fbf"
      )
      .then((response) => {
        dispatch(getMovie(response.data.results.original_title));
      });
  };
}

export function getMovie(data) {
  return {
    type: "CHANGE_MOVIE",
    data: data,
  };
}
