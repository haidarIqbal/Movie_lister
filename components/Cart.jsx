import React, { Component } from "react";
import Counters from "./counters";
import NavBar from "./NavBar";

class Cart extends Component {
  state = {
    counters: [
      {
        id: 1,
        value: 0,
      },
      {
        id: 2,
        value: 6,
      },
      {
        id: 3,
        value: 2,
      },
    ],
  };

  handleDelete = (id) => {
    const counters = this.state.counters.filter((arr) => arr.id !== id);
    this.setState({ counters });
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };
  handleDecrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    if (counters[index].value !== 0) {
      counters[index].value--;
    }
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((counter) => {
      counter.value = 0;
      return counter;
    });
    this.setState({ counters });
  };
  render() {
    return (
      <React.Fragment>
        <NavBar
          counter={this.state.counters.filter((c) => c.value > 0).length}
        />
        <Counters
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onReset={this.handleReset}
          onDelete={this.handleDelete}
          counters={this.state.counters}
        />
      </React.Fragment>
    );
  }
}

export default Cart;
