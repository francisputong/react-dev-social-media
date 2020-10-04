import React from "react";
import Container from "@material-ui/core/Container";

import PrivateRoute from "../components/routing/PrivateRoute";
import Home from "../components/pages/Home";
import Profile from "../components/pages/Profile";
import PostDetail from "../components/pages/PostDetail";

const AuthRoute = () => {
  return (
    <Container component="main">
      <PrivateRoute exact path="/home" component={Home} />
      <PrivateRoute exact path="/profile" component={Profile} />
      <PrivateRoute exact path="/post/:user/:id" component={PostDetail} />
    </Container>
  );
};

export default AuthRoute;
