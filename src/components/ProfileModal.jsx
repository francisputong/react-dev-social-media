import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Modal from "@material-ui/core/Modal";
import Paper from "@material-ui/core/Paper";
import GridList from "@material-ui/core/GridList";
import Grow from "@material-ui/core/Grow";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";

import Moment from "react-moment";

const ProfileModal = ({ open, handleClose, experience, education }) => {
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
      <Grow in={open}>
        <Paper
          style={{
            width: "30%",
            height: "80%",
            padding: "10px",
          }}
        >
          <GridList style={{ height: "100%" }} cols={1}>
            <Box display="flex" flexDirection="column">
              <Typography variant="h5" color="textPrimary">
                Experience
              </Typography>
              {experience.map((exp) => (
                <Box key={exp}>
                  <List>
                    <ListItem divider>
                      <ListItemText
                        disableTypography
                        inset
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
                      <IconButton>
                        <DeleteIcon />
                      </IconButton>
                    </ListItem>
                  </List>
                </Box>
              ))}
              <Typography variant="h5" color="textPrimary">
                Education
              </Typography>
              <Box>
                <List>
                  <ListItem divider>
                    <ListItemText
                      disableTypography
                      inset
                      primary={
                        <Typography variant="h6" color="textPrimary">
                          La Salle
                        </Typography>
                      }
                      secondary={
                        <>
                          <Typography
                            variant="body2"
                            color="textPrimary"
                            component="p"
                          >
                            2018-07-18
                          </Typography>
                          <Typography
                            variant="body2"
                            color="textPrimary"
                            component="i"
                          >
                            BS Computer Engineering
                          </Typography>
                        </>
                      }
                    />
                    <IconButton>
                      <DeleteIcon />
                    </IconButton>
                  </ListItem>
                </List>
              </Box>
            </Box>
          </GridList>
        </Paper>
      </Grow>
    </Modal>
  );
};

export default ProfileModal;
