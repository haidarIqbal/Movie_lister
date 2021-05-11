import React from "react";
import SideBar from "./sidebar";
import { Route, Switch } from "react-router-dom";
import Users from "./users";
import Posts from "./posts";
const Dashbaord = ({ match }) => {
  return (
    <div>
      <h1>Admin Dashbaord</h1>
      <SideBar />

      <Route path="/admin/users">
        <Users />
      </Route>
      <Route path="/admin/posts">
        <Posts />
      </Route>
    </div>
  );
};

export default Dashbaord;
