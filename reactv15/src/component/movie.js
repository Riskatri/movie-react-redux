import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchGets } from "../actions/getActions";

class Movies extends Component {
  componentWillMount() {
    this.props.fetchGets();
  }
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     data: [],
  //   };
  // }

  // async componentDidMount() {
  //   const url =
  //     "https://api.themoviedb.org/3/discover/movie?api_key=f7b67d9afdb3c971d4419fa4cb667fbf";
  //   const res = await fetch(url);

  //   const data = await res.json();
  //   console.log(data);
  //   this.setState({ data: data.results });
  // }

  render() {
    return (
      <div className="container">
        {this.props.data.map((results) => (
          <h1 key={results.id}>
            {results.original_title}: {results.release_date}
          </h1>
        ))}
      </div>
    );
  }
}
const mapStateToPrps = (state) => ({
  data: state.data.data,
});

export default connect(mapStateToPrps, { fetchGets })(Movies);
