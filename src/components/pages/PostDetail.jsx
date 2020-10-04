import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import * as Yup from "yup";

import { getPost, createComment } from "../../redux/actions/posts";
import Comment from "../Comment";
import Post from "../Post";
import AppFormField from "../AppFormField";
import AppForm from "../AppForm";
import AppFormButton from "../AppFormButton";
import useStyles from "../styles/home";
import SideMenu from "../SideMenu";

const validationSchema = Yup.object().shape({
  text: Yup.string().label("Post"),
});

const PostDetail = ({ getPost, createComment, match, post }) => {
  const classes = useStyles();
  const [postLoading, setPostLoading] = useState(false);

  const getUserPost = async () => {
    await getPost(match.params.id);
    setPostLoading(true);
  };

  useEffect(() => {
    getUserPost();
  }, []);

  const handleSubmit = async (text, { resetForm }) => {
    await createComment(match.params.id, text);
    resetForm({});
  };

  return (
    <Grid container>
      <Grid
        item
        container
        direction="column"
        alignItems="flex-end"
        xs={2}
        sm={2}
        md={3}
        lg={3}
      >
        <Box position="fixed" pr="20px">
          <SideMenu />
        </Box>
      </Grid>
      <Grid item xs={10} sm={8} md={6} lg={6}>
        <Box>
          <div className={classes.header}>
            <Typography variant="h5">{match.params.user}`s post</Typography>
          </div>
          <Divider />
          {/* {postLoading ? <Posts posts={post} /> : <p>loading</p>} */}
          {postLoading ? (
            <>
              <Post post={post} clickable={false} />
              <div className={classes.post}>
                {/* <div className={classes.avatar}>
              <Avatar
                alt="Remy Sharp"
                src="//www.gravatar.com/avatar/fd3dece198b24d30203599d42eef2445"
              />
            </div> */}
                <AppForm
                  initialValues={{ text: "" }}
                  onSubmit={handleSubmit}
                  validationSchema={validationSchema}
                >
                  <div className={classes.postInput}>
                    <AppFormField
                      label={`Reply to ${match.params.user}'s post`}
                      name="text"
                      multiline
                    />
                    <AppFormButton
                      style={classes.postButton}
                      size="medium"
                      name="text"
                      value="Reply"
                      color="primary"
                    />
                  </div>
                </AppForm>
              </div>{" "}
              <Box m="16px">
                <Typography variant="h6">Comments</Typography>
                {post.comments.length > 0 ? (
                  post.comments.map((comment) => (
                    <Comment comment={comment} postId={post._id} />
                  ))
                ) : (
                  <Typography variant="caption">
                    There are no comments to this post.
                  </Typography>
                )}
              </Box>
            </>
          ) : (
            <p>Loading...</p>
          )}
        </Box>
      </Grid>
    </Grid>
  );
};

const mapStateToProps = (state) => ({
  post: state.post.userPost,
});

export default connect(mapStateToProps, { getPost, createComment })(PostDetail);
