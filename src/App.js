import React from "react";
import Grid from "@material-ui/core/Grid";

import Login from "./components/pages/Login";
import Home from "./components/pages/Home";
import Profile from "./components/pages/Profile";
import Container from "@material-ui/core/Container";

const App = () => {
  return (
    <>
      <Grid style={{ display: "flex" }}>
        <Grid item xs={2} sm={2} md={3} lg={3}>
          <h1>HELLO</h1>
        </Grid>
        <Grid item xs={10} sm={10} md={6} lg={6}>
          <Profile />
        </Grid>
      </Grid>
    </>
  );
};

export default App;
