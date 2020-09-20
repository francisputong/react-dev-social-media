import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import * as Yup from "yup";
import Modal from "@material-ui/core/Modal";
import Grid from "@material-ui/core/Grid";

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
  });

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
          <Typography variant="h5">Edit Profile</Typography>
          <AppForm
            initialValues={{
              bio: "",
              guthub: "",
              company: "",
              website: "",
              location: "",
              skills: "",
            }}
            validationSchema={validationSchema}
          >
            <AppFormField
              label="Bio"
              name="bio"
              margin="normal"
              variant="filled"
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
          </AppForm>
        </Paper>
      </Grid>
    </Modal>
  );
};

export default EditProfileModal;
