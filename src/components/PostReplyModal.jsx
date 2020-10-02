import React from "react";
import { connect } from "react-redux";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Modal from "@material-ui/core/Modal";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Fade from "@material-ui/core/Fade";
import Backdrop from "@material-ui/core/Backdrop";
import * as Yup from "yup";

import useStyles from "./styles/home";
import AppForm from "./AppForm";
import AppFormField from "./AppFormField";
import AppFormButton from "./AppFormButton";
import { createComment } from "../redux/actions/posts";

const PostReplyModal = ({ open, handleClose, name, postId, createComment }) => {
  const classes = useStyles();

  const validationSchema = Yup.object().shape({
    text: Yup.string().label("Post"),
  });

  const handleSubmit = async (text, { resetForm }) => {
    await createComment(postId, text);
    resetForm({});
    handleClose();
  };

  return (
    <Modal
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Grid item xs={10} sm={7} md={6} lg={5}>
        <Container maxWidth="md">
          <Fade in={open}>
            <Paper
              style={{
                // height: "30vh",
                padding: "10px",
              }}
            >
              <Box display="flex" flexDirection="column">
                <Typography variant="h6" color="textPrimary">
                  Reply to {name}'s post
                </Typography>
                <Box display="flex" alignItems="center">
                  <AppForm
                    initialValues={{ text: "" }}
                    onSubmit={handleSubmit}
                    validationSchema={validationSchema}
                  >
                    <div className={classes.postInput}>
                      <AppFormField label="Reply" name="text" multiline />
                      <AppFormButton
                        style={classes.postButton}
                        size="medium"
                        name="text"
                        value="Reply"
                        color="primary"
                      />
                    </div>
                  </AppForm>
                </Box>
              </Box>
            </Paper>
          </Fade>
        </Container>
      </Grid>
    </Modal>
  );
};

export default connect(null, { createComment })(PostReplyModal);
