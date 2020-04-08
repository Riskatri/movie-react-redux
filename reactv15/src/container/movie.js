import React from "react";
import { connect } from "react-redux";
import * as actionCreators from "../actions/index";
import Movie from "../component/mov.js";
class Movies extends React.Component {
  render() {
    return (
      <Movie onItemClick={this.props.loadData} data={this.props.data}></Movie>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, actionCreators)(Movies);
