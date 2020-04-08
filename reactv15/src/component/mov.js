import React from "react";

class Movie extends React.Component {
  handleItemClick = (data) => {
    if (this.props.onItemClick) {
      this.props.onItemClick(data);
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
