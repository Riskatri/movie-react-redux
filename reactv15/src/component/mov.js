import React from "react";

class Movie extends React.Component {
  handleItemClick = (item) => {
    if (this.props.onItemClick) {
      this.props.onItemClick(item);
    }
  };

  render() {
    return (
      <div>
        <button onItemClick={this.handleItemClick}>see movie</button>
      </div>
    );
  }
}

export default Movie;
