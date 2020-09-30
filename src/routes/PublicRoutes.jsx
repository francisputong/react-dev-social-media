import React from "react";
import { Route } from "react-router-dom";
import Container from "@material-ui/core/Container";

import Login from "../components/pages/Login";

const PublicRoutes = () => {
  return (
    <Container component="main" maxWidth="xs">
      <Route exact path="/" component={Login} />
    </Container>
  );
};

export default PublicRoutes;
