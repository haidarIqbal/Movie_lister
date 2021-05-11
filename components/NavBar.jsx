import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = ({ counter }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <span className="navbar-brand">Navbar &nbsp;</span>
      <div className="nav navbar-nav">
        <NavLink className="nav-item nav-link" to="/movies">
          Movies
        </NavLink>
        <NavLink className="nav-item nav-link" to="/customers">
          Customers
        </NavLink>
        <NavLink className="nav-item nav-link" to="/rentals">
          Rentals
        </NavLink>
        <NavLink className="nav-item nav-link" to="/json">
          JSON Placeholder
        </NavLink>
        <NavLink className="nav-item nav-link" to="/login">
          Login
        </NavLink>
        <NavLink className="nav-item nav-link" to="/register">
          Register
        </NavLink>

        {/* <li className="nav-item">
          <Link className="nav-link" to="/admin">
            Admin
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li> */}
      </div>
    </nav>
  );
};

export default Navbar;
