import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as Yup from "yup";

import AppButton from "../AppButton";
import AppForm from "../AppForm";
import AppFormButton from "../AppFormButton";
import AppFormField from "../AppFormField";
import useStyles from "../styles/login";
import { register } from "../../redux/actions/auth";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  name: Yup.string().required().label("Name"),
  password: Yup.string().required().min(6).label("Password"),
  passwordConfirm: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
});

const Register = ({ register, isAuth }) => {
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async ({ email, name, password }) => {
    setIsLoading(true);
    await register({ email, name, password }, setIsLoading);
  };

  if (isAuth) {
    return <Redirect to="/home" />;
  }

  return (
    <div className={classes.login}>
      <Card className={classes.card}>
        <CardContent className={classes.cardContent}>
          <Typography color="textPrimary" variant="h5">
            Register
          </Typography>
          <AppForm
            initialValues={{
              email: "",
              name: "",
              password: "",
              passwordConfirm: "",
            }}
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
                name="name"
                label="Name"
              />
              <AppFormField
                margin="normal"
                variant="outlined"
                name="password"
                label="Password"
                type="password"
                inputProps={{
                  autocomplete: "new-password",
                  form: {
                    autocomplete: "off",
                  },
                }}
              />
              <AppFormField
                margin="normal"
                variant="outlined"
                name="passwordConfirm"
                label="Confirm Password"
                type="password"
                inputProps={{
                  autocomplete: "new-password",
                  form: {
                    autocomplete: "off",
                  },
                }}
              />
              <AppFormButton
                fullWidth
                value="Register"
                color="primary"
                size="large"
                disabled={isLoading}
              />
            </form>
            <Divider
              variant="middle"
              style={{ width: "100%", margin: "10px" }}
            />
            <AppButton value="Log in" color="default" component={Link} to="/" />
          </AppForm>
        </CardContent>
      </Card>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { register })(Register);
