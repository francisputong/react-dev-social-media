import React, { useState } from "react";
import { connect } from "react-redux";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Modal from "@material-ui/core/Modal";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import GridList from "@material-ui/core/GridList";
import Fade from "@material-ui/core/Fade";
import Backdrop from "@material-ui/core/Backdrop";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import DeleteIcon from "@material-ui/icons/Delete";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import Moment from "react-moment";
import * as Yup from "yup";

import AppForm from "./AppForm";
import AppFormField from "./AppFormField";
import AppFormButton from "./AppFormButton";
import {
  addExperience,
  deleteExperience,
  addEducation,
  deleteEducation,
} from "../redux/actions/profile";

const ProfileModal = ({
  open,
  handleClose,
  experience,
  education,
  userId,
  id,
  addExperience,
  deleteExperience,
  addEducation,
  deleteEducation,
}) => {
  const validationSchemaExperience = Yup.object().shape({
    company: Yup.string().label("Company").required(),
    from: Yup.date().label("From").required(),
    to: Yup.date().label("To").required(),
    title: Yup.string().label("Title").required(),
  });

  const validationSchemaEducation = Yup.object().shape({
    school: Yup.string().label("School").required(),
    from: Yup.date().label("From").required(),
    to: Yup.date().label("To").required(),
    degree: Yup.string().label("Degree").required(),
  });

  const [addExp, setAddExp] = useState(false);
  const [addEdu, setAddEdu] = useState(false);

  const toggleAddExp = () => setAddExp(!addExp);
  const toggleAddEdu = () => setAddEdu(!addEdu);

  const handleSubmitExperience = async (data) => {
    await addExperience(data);
    toggleAddExp();
  };

  const handleDeleteExperience = async (expId) => {
    await deleteExperience(expId);
  };

  const handleSubmitEducation = async (data) => {
    console.log(data);
    await addEducation(data);
    toggleAddEdu();
  };

  const handleDeleteEducation = async (eduId) => {
    await deleteEducation(eduId);
  };

  const addUserExperience = () => {
    return (
      <>
        <AppForm
          initialValues={{
            company: "",
            from: "",
            to: "",
            title: "",
          }}
          validationSchema={validationSchemaExperience}
          onSubmit={handleSubmitExperience}
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="h6">
              <IconButton onClick={toggleAddExp}>
                <ArrowBackIosIcon />
              </IconButton>{" "}
              Add Work Experience
            </Typography>
            <AppFormButton value="Save" color="primary" />
          </Box>
          <AppFormField
            label="Company"
            name="company"
            margin="normal"
            variant="filled"
            helper="Name of your company"
          />
          <AppFormField
            label="Title"
            name="title"
            margin="normal"
            variant="filled"
            helper="Your work title"
          />
          <AppFormField
            name="from"
            margin="normal"
            variant="filled"
            helper="Start date"
            type="date"
          />
          <AppFormField
            name="to"
            margin="normal"
            variant="filled"
            helper="End date"
            type="date"
          />
        </AppForm>
      </>
    );
  };

  const addUserEducation = () => {
    return (
      <>
        <AppForm
          initialValues={{
            school: "",
            from: "",
            to: "",
            degree: "",
          }}
          validationSchema={validationSchemaEducation}
          onSubmit={handleSubmitEducation}
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="h6">
              <IconButton onClick={toggleAddEdu}>
                <ArrowBackIosIcon />
              </IconButton>{" "}
              Add Education
            </Typography>
            <AppFormButton value="Save" color="primary" />
          </Box>
          <AppFormField
            label="School"
            name="school"
            margin="normal"
            variant="filled"
            helper="Name of your school"
          />
          <AppFormField
            label="Degree"
            name="degree"
            margin="normal"
            variant="filled"
            helper="The degree you were taking"
          />
          <AppFormField
            name="from"
            margin="normal"
            variant="filled"
            helper="Start date"
            type="date"
          />
          <AppFormField
            name="to"
            margin="normal"
            variant="filled"
            helper="End date"
            type="date"
          />
        </AppForm>
      </>
    );
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
      <Grid item xs={10} sm={6} md={4} lg={3}>
        <Fade in={open}>
          <Paper
            style={{
              height: "80vh",
              padding: "10px",
            }}
          >
            <GridList style={{ height: "100%" }} cols={1}>
              {!addExp && !addEdu ? (
                <Box display="flex" flexDirection="column">
                  <Typography variant="h5" color="textPrimary">
                    Experience
                    {userId === id && (
                      <IconButton onClick={toggleAddExp}>
                        <AddCircleIcon />
                      </IconButton>
                    )}
                  </Typography>
                  {experience.length === 0 && (
                    <Typography align="center">
                      Add a work experience!
                    </Typography>
                  )}
                  {experience.map((exp) => (
                    <Box key={exp._id}>
                      <List>
                        <ListItem divider>
                          <ListItemText
                            disableTypography
                            primary={
                              <Typography variant="h6" color="textPrimary">
                                {exp.company}
                              </Typography>
                            }
                            secondary={
                              <>
                                <Typography
                                  variant="body2"
                                  color="textPrimary"
                                  component="p"
                                >
                                  <Moment date={exp.from} format="YYYY/MM/DD" />{" "}
                                  - <Moment date={exp.to} format="YYYY/MM/DD" />
                                </Typography>
                                <Typography
                                  variant="body2"
                                  color="textPrimary"
                                  component="i"
                                >
                                  {exp.title}
                                </Typography>
                              </>
                            }
                          />
                          {userId === id && (
                            <IconButton
                              onClick={() => handleDeleteExperience(exp._id)}
                            >
                              <DeleteIcon />
                            </IconButton>
                          )}
                        </ListItem>
                      </List>
                    </Box>
                  ))}
                  <Typography variant="h5" color="textPrimary">
                    Education
                    {userId === id && (
                      <IconButton onClick={toggleAddEdu}>
                        <AddCircleIcon />
                      </IconButton>
                    )}
                  </Typography>
                  {education.length === 0 && (
                    <Typography align="center">Add an education!</Typography>
                  )}
                  {education.map((edu) => (
                    <Box key={edu._id}>
                      <List>
                        <ListItem divider>
                          <ListItemText
                            disableTypography
                            primary={
                              <Typography variant="h6" color="textPrimary">
                                {edu.school}
                              </Typography>
                            }
                            secondary={
                              <>
                                <Typography
                                  variant="body2"
                                  color="textPrimary"
                                  component="p"
                                >
                                  <Moment date={edu.from} format="MM/DD/YYYY" />{" "}
                                  - <Moment date={edu.ro} format="MM/DD/YYYY" />
                                </Typography>
                                <Typography
                                  variant="body2"
                                  color="textPrimary"
                                  component="i"
                                >
                                  {edu.degree}
                                </Typography>
                              </>
                            }
                          />
                          {userId === id && (
                            <IconButton
                              onClick={() => handleDeleteEducation(edu._id)}
                            >
                              <DeleteIcon />
                            </IconButton>
                          )}
                        </ListItem>
                      </List>
                    </Box>
                  ))}
                </Box>
              ) : addExp ? (
                <Box>{addUserExperience()}</Box>
              ) : addEdu ? (
                <Box>{addUserEducation()}</Box>
              ) : null}
            </GridList>
          </Paper>
        </Fade>
      </Grid>
    </Modal>
  );
};

const mapStateToProps = (state) => ({
  userId: state.auth.user.id,
});

export default connect(mapStateToProps, {
  addExperience,
  deleteExperience,
  addEducation,
  deleteEducation,
})(ProfileModal);
