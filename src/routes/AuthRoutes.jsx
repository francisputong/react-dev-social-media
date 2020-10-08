import React from "react";
import Box from "@material-ui/core/Box";
import Hidden from "@material-ui/core/Hidden";

import PrivateRoute from "../components/routing/PrivateRoute";
import Home from "../components/pages/Home";
import Profile from "../components/pages/Profile";
import PostDetail from "../components/pages/PostDetail";
import BottomTabs from "../components/BottomTabs";

const AuthRoute = () => {
  return (
    <>
      <Box mb={7}>
        <PrivateRoute exact path="/home" component={Home} />
        <PrivateRoute exact path="/profile/:id" component={Profile} />
        <PrivateRoute exact path="/post/:user/:id" component={PostDetail} />
      </Box>
      <Hidden mdUp>
        <BottomTabs />
      </Hidden>
    </>
  );
};

export default AuthRoute;
