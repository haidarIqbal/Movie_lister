import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  render() {
    const { onDelete, onReset, onIncrement, onDecrement } = this.props;
    return (
      <div className="container">
        <button className="btn btn-primary" onClick={onReset}>
          Reset
        </button>
        {this.props.counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            selected={true}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
