import React from "react";
import { Route } from "react-router-dom";
import Container from "@material-ui/core/Container";

import Login from "../components/pages/Login";
import Register from "../components/pages/Register";

const PublicRoutes = () => {
  return (
    <Container component="main" maxWidth="xs">
      <Route exact path="/" component={Login} />
      <Route exact path="/register" component={Register} />
    </Container>
  );
};

export default PublicRoutes;
