import React, { Component } from "react";

class Liked extends Component {
  render() {
    let classes = "fa fa-heart";
    if (!this.props.movie) classes += "-o";

    return (
      <i
        className={classes}
        style={{ cursor: "pointer" }}
        onClick={this.props.onClicked}
      />
    );
  }
}

export default Liked;
