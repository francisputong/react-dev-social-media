import React from "react";
import Container from "@material-ui/core/Container";

import PrivateRoute from "../components/routing/PrivateRoute";
import Home from "../components/pages/Home";
import Profile from "../components/pages/Profile";

const AuthRoute = () => {
  return (
    <Container component="main">
      <PrivateRoute exact path="/home" component={Home} />
      <PrivateRoute exact path="/profile" component={Profile} />
    </Container>
  );
};

export default AuthRoute;
