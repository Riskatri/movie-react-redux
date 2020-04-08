import React from "react";

class Movie extends React.Component {
  // handleItemClick = (results) => {
  //   if (this.props.onItemClick) {
  //     this.props.onItemClick(results);
  //   }
  // };

  render() {
    return (
      <div>
        <button onClick={this.props.handleItemClick}>see movie</button>
        <div> {this.props.data}</div>
      </div>
    );
  }
}

export default Movie;
