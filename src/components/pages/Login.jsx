import React from "react";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import * as Yup from "yup";

import AppButton from "../AppButton";
import AppForm from "../AppForm";
import AppFormButton from "../AppFormButton";
import AppFormField from "../AppFormField";
import useStyles from "../styles/login";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(6).label("Password"),
});

const Login = () => {
  const classes = useStyles();

  const handleSubmit = ({ email, password }) => {
    console.log(email, password);
  };

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.login}>
        <Card className={classes.card}>
          <CardContent className={classes.cardContent}>
            <Typography color="textPrimary" component="h1">
              TEODOYDOY
            </Typography>
            <AppForm
              initialValues={{ email: "", password: "wwewewe" }}
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
              <Divider variant="middle" style={{ width: "100%" }} />
              <AppButton value="Create an account" color="default" />
            </AppForm>
          </CardContent>
        </Card>
      </div>
    </Container>
  );
};

export default Login;
