import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import CircularProgress from "@material-ui/core/CircularProgress";
import * as Yup from "yup";

import { getPosts, createPost } from "../../redux/actions/posts";
import AppFormField from "../AppFormField";
import AppForm from "../AppForm";
import AppFormButton from "../AppFormButton";
import useStyles from "../styles/home";
import Posts from "../Posts";
import SideMenu from "../SideMenu";

const validationSchema = Yup.object().shape({
  text: Yup.string().label("Post"),
});

const Home = ({ getPosts, createPost, posts }) => {
  const classes = useStyles();
  const [postLoading, setPostLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const getAllPosts = async () => {
    await getPosts();
    setPostLoading(true);
  };

  useEffect(() => {
    getAllPosts();
  }, []);

  const handleSubmit = async ({ text }, { resetForm }) => {
    setIsSubmitting(true);
    await createPost(text);
    resetForm({});
    setIsSubmitting(false);
  };

  return (
    <Grid container>
      <Grid
        item
        className={classes.border}
        container
        direction="column"
        alignItems="flex-end"
        sm={1}
        md={3}
        lg={3}
      >
        <Box position="fixed" pr="20px">
          <Hidden smDown>
            <SideMenu />
          </Hidden>
        </Box>
      </Grid>
      <Grid className={classes.border} item xs={12} sm={10} md={6} lg={6}>
        <Box>
          <div className={classes.header}>
            <Typography variant="h5">Home</Typography>
          </div>
          <Divider />
          <div className={classes.post}>
            {/* <div className={classes.avatar}>
              <Avatar
                alt="francis"
                src="//www.gravatar.com/avatar/fd3dece198b24d30203599d42eef2445"
              />
            </div> */}
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
                  disabled={isSubmitting}
                />
              </div>
            </AppForm>
          </div>
          {postLoading ? (
            <Posts posts={posts} />
          ) : (
            <Box display="flex" justifyContent="center" height="90vh" mt="10px">
              <CircularProgress />
            </Box>
          )}
        </Box>
      </Grid>
    </Grid>
  );
};

const mapStateToProps = (state) => ({
  posts: state.post.posts,
});

export default connect(mapStateToProps, { createPost, getPosts })(Home);
