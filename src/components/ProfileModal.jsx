import React from "react";
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
import IconButton from "@material-ui/core/IconButton";

import Moment from "react-moment";

const ProfileModal = ({
  open,
  handleClose,
  experience,
  education,
  userId,
  id,
}) => {
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
              <Box display="flex" flexDirection="column">
                <Typography variant="h5" color="textPrimary">
                  Experience
                </Typography>
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
                                <Moment date={exp.from} format="MM/DD/YYYY" /> -{" "}
                                <Moment date={exp.ro} format="MM/DD/YYYY" />
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
                          <IconButton>
                            <DeleteIcon />
                          </IconButton>
                        )}
                      </ListItem>
                    </List>
                  </Box>
                ))}
                <Typography variant="h5" color="textPrimary">
                  Education
                </Typography>
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
                                <Moment date={edu.from} format="MM/DD/YYYY" /> -{" "}
                                <Moment date={edu.ro} format="MM/DD/YYYY" />
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
                          <IconButton>
                            <DeleteIcon />
                          </IconButton>
                        )}
                      </ListItem>
                    </List>
                  </Box>
                ))}
              </Box>
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

export default connect(mapStateToProps)(ProfileModal);
