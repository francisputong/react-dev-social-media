import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import * as Yup from "yup";

import AppButton from "../AppButton";
import AppForm from "../AppForm";
import AppFormButton from "../AppFormButton";
import AppFormField from "../AppFormField";
import useStyles from "../styles/login";
import { login } from "../../redux/actions/auth";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(6).label("Password"),
});

const Register = ({ login, isAuth }) => {
  const classes = useStyles();

  const handleSubmit = async ({ email, password }) => {
    await login({ email, password });
  };

  if (isAuth) {
    return <Redirect to="/home" />;
  }

  return (
    <div className={classes.login}>
      <Card className={classes.card}>
        <CardContent className={classes.cardContent}>
          <Typography color="textPrimary" component="h1">
            Devs App
          </Typography>
          <AppForm
            initialValues={{ email: "", password: "" }}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
          >
            <form>
              <AppFormField
                margin="normal"
                variant="outlined"
                name="email"
                label="Email"
              />
              <AppFormField
                margin="normal"
                variant="outlined"
                name="password"
                label="Password"
              />
              <AppFormButton
                fullWidth
                value="Log In"
                color="primary"
                size="large"
              />
            </form>
            <Divider
              variant="middle"
              style={{ width: "100%", margin: "10px" }}
            />
            <AppButton value="Create an account" color="default" />
          </AppForm>
        </CardContent>
      </Card>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Register);