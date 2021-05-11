import React, { Component } from "react";
import Cart from "./components/Cart";
import ShowMovies from "./components/showMovies";
import { Redirect, Route, Switch } from "react-router-dom";
import Products from "./components/products";
import Navbar from "./components/NavBar";
import Home from "./components/home";
import ProductDetails from "./components/productDetails";
import Posts from "./components/posts";
import FourOFour from "./components/fourOFour";
import Rentals from "./components/Rentals";
import Customers from "./components/customers";
import Dashbaord from "./components/admin/dashboard";
import MovieDetails from "./components/movieDetails";
import AddMovie from "./components/addMovie";
import LoginForm from "./components/login";
import Register from "./components/register";
import JSONP from "./components/json";
class App extends Component {
  state = {
    counter: 0,
  };
  render() {
    return (
      <div className="container">
        <Navbar />
        <div className="content">
          <Switch>
            <Route path="/movies/moviedetails/:id" component={MovieDetails} />
            <Route path="/movie/new" component={AddMovie} />
            <Route path="/movie/:id" component={AddMovie} />
            <Route path="/json" component={JSONP} />
            <Route path="/login" component={LoginForm} />
            <Route path="/register" component={Register} />
            <Route path="/movies" component={ShowMovies} />
            <Route path="/customers" component={Customers} />
            <Route path="/rentals" component={Rentals} />
            {/* <Route path="/products/:id" component={ProductDetails} />
            <Route path="/posts/:year?" component={Posts} />
            <Route
              path="/products"
              render={(props) => <Products sortBy="asc" {...props} />}
            />
            <Route path="/admin" component={Dashbaord} />*/}
            <Route path="/not-found" component={FourOFour} />
            <Redirect from="/" to="/movies" />
            <Redirect to="/not-found" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
