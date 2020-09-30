import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import * as Yup from "yup";
import Modal from "@material-ui/core/Modal";
import Grid from "@material-ui/core/Grid";
import GridList from "@material-ui/core/GridList";
import Box from "@material-ui/core/Box";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";

import AppForm from "./AppForm";
import AppFormField from "./AppFormField";
import AppFormButton from "./AppFormButton";

const EditProfileModal = ({ open, handleClose }) => {
  const validationSchema = Yup.object().shape({
    bio: Yup.string().label("Bio"),
    github: Yup.string().label("GitHub"),
    company: Yup.string().label("Company"),
    website: Yup.string().label("Website"),
    location: Yup.string().label("Location"),
    skills: Yup.string().label("Skills"),
    linkedIn: Yup.string().label("LinkedIn"),
    facebook: Yup.string().label("Facebook"),
    twitter: Yup.string().label("Twitter"),
  });

  const handleSubmit = (data) => {
    console.log(data);
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
    >
      <Grid item xs={9} sm={7} md={5} lg={4}>
        <Paper
          style={{
            padding: "10px",
            height: "90vh",
          }}
        >
          <AppForm
            initialValues={{
              bio: "",
              github: "",
              company: "",
              website: "",
              location: "",
              skills: "",
              linkedIn: "",
              twitter: "",
              facebook: "",
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography variant="h5">Edit Profile</Typography>
              <AppFormButton value="Save" color="primary" />
            </Box>
            <GridList style={{ height: "80vh" }} cellHeight="auto" cols={1}>
              <AppFormField
                label="Bio"
                name="bio"
                margin="normal"
                variant="filled"
                multiline
                helper="Tell us more about yourself"
              />
              <AppFormField
                label="GitHub"
                name="github"
                variant="filled"
                margin="normal"
                helper="GitHub username"
              />
              <AppFormField
                label="Company"
                name="company"
                variant="filled"
                margin="normal"
                helper="Current company (if applicable)"
              />
              <AppFormField
                label="Website"
                name="website"
                variant="filled"
                margin="normal"
                helper="Your personal website"
              />
              <AppFormField
                label="Location"
                name="location"
                variant="filled"
                margin="normal"
                helper="City"
              />
              <AppFormField
                label="Skills"
                name="skills"
                variant="filled"
                margin="normal"
                helper="Please use comma separated values (eg. HTML,CSS,ReactJS,NodeJS)"
              />
              <Box display="flex" alignItems="center" width="100%">
                <LinkedInIcon style={{ color: "#2867B2" }} fontSize="large" />
                <AppFormField
                  label="LinkedIn"
                  name="linkedIn"
                  variant="filled"
                  margin="normal"
                  helper="Link to your LinkedIn account"
                />
              </Box>
              <Box display="flex" alignItems="center" width="100%">
                <TwitterIcon style={{ color: "#1DA1F2" }} fontSize="large" />
                <AppFormField
                  label="Twitter"
                  name="twitter"
                  variant="filled"
                  margin="normal"
                  helper="Link to your Twitter account"
                />
              </Box>
              <Box display="flex" alignItems="center" width="100%">
                <FacebookIcon style={{ color: "#4267B2" }} fontSize="large" />
                <AppFormField
                  label="Facebook"
                  name="facebook"
                  variant="filled"
                  margin="normal"
                  helper="Link to your Facebook account"
                />
              </Box>
            </GridList>
          </AppForm>
        </Paper>
      </Grid>
    </Modal>
  );
};

export default EditProfileModal;
