import { FETCH_GETS } from "./index";

export function fetchGets() {
  return function (dispatch) {
    // console.log("fetching");

    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=f7b67d9afdb3c971d4419fa4cb667fbf"
    )
      .then((res) => res.json())
      .then(
        (data) =>
          dispatch({
            type: FETCH_GETS,
            payload: data.results,
          })

        // this.setState({data: data.results})
      );
  };
}
