import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import * as Yup from "yup";

import AppFormField from "../AppFormField";
import AppForm from "../AppForm";
import AppFormButton from "../AppFormButton";
import useStyles from "../styles/home";
import Posts from "../Posts";

const validationSchema = Yup.object().shape({
  text: Yup.string().label("Post"),
});

const Home = () => {
  const classes = useStyles();
  const handleSubmit = ({ text }) => {
    console.log(text);
  };

  return (
    <Container>
      <Grid style={{ display: "flex" }}>
        <Grid item xs={3} sm={3} md={3} lg={3}>
          <h1>HELLO</h1>
        </Grid>
        <Grid item xs={9} sm={9} md={6} lg={6}>
          <div className={classes.header}>
            <Typography variant="h5">Home</Typography>
          </div>
          <Divider />
          <div className={classes.post}>
            <div className={classes.avatar}>
              <Avatar
                alt="Remy Sharp"
                src="//www.gravatar.com/avatar/fd3dece198b24d30203599d42eef2445"
              />
            </div>
            <AppForm
              initialValues={{ text: "" }}
              onSubmit={handleSubmit}
              validationSchema={validationSchema}
            >
              <div className={classes.postInput}>
                <AppFormField label="Post something!" name="text" multiline />
                <AppFormButton
                  style={classes.postButton}
                  size="medium"
                  name="text"
                  value="Post"
                  color="primary"
                />
              </div>
            </AppForm>
          </div>
          <Posts />
        </Grid>
        <Hidden smDown>
          <Grid item md={3} lg={3}>
            <h1>HELLO</h1>
          </Grid>
        </Hidden>
      </Grid>
    </Container>
  );
};

export default Home;
