import React, { Component, setState } from "react";
class Counter extends Component {
  state = {
    tags: ["tag1", "tag2", "tag3"],
  };

  render() {
    return (
      <div className="container">
        <br />
        <span className={this.getClassbages()}>{this.formatCount()}</span>
        &nbsp;
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-success"
        >
          +
        </button>
        &nbsp;
        <button
          onClick={() => this.props.onDecrement(this.props.counter)}
          className="btn btn-info"
          disabled={this.props.counter.value === 0 ? "disabled" : ""}
        >
          -
        </button>
        &nbsp;
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger"
        >
          Delete
        </button>
        {/* {this.renderTags()} */}
        <br />
      </div>
    );
  }

  renderTags() {
    if (this.state.tags.length === 0) return <p>no tags</p>;
    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  getClassbages() {
    let buttonClass = "badge m-2 badge-";
    return (buttonClass +=
      this.props.counter.value === 0 ? "warning" : "primary");
  }
  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "zero" : value;
  }
}

export default Counter;
