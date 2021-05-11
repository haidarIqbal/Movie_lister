import React, { Component } from "react";

import { Link } from "react-router-dom";

class Products extends Component {
  state = {
    products: [
      { id: 1, name: "product 1" },
      { id: 2, name: "product 2" },
      { id: 3, name: "product 3" },
    ],
  };
  render() {
    return (
      <div>
        <ul>
          {this.state.products.map((product) => {
            return (
              <li key={product.id}>
                <Link
                  to={`/products/${product.id}`}
                >{`product-${product.id}`}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Products;
