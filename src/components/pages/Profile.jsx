import React, { useState } from "react";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";
import Divider from "@material-ui/core/Divider";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import GitHubIcon from "@material-ui/icons/GitHub";
import WorkIcon from "@material-ui/icons/Work";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import IconButton from "@material-ui/core/IconButton";

import AppButton from "../AppButton";
import ProfileModal from "../ProfileModal";
import EditProfileModal from "../EditProfileModal";
import Posts from "../Posts";
import SideMenu from "../SideMenu";
import useStyles from "../styles/profileCard.js";

const skills = ["HTML", "CSS", "PHP", "Python", "JS"];

const experience = [
  {
    id: "5f64bda3859ca6421077844f",
    title: "Software Developer",
    company: "Woofy Incorporated",
    from: "2018-07-18T16:00:00.000Z",
    to: "2018-09-18T16:00:00.000Z",
  },
];

const education = [
  {
    id: "5f60ba34a36fd511b824bebe",
    school: "La Salle",
    degree: "BS Computer Engineering",
    from: "2015-07-18T16:00:00.000Z",
    to: "2019-09-18T16:00:00.000Z",
  },
];

const posts = [
  {
    id: "5f5c9d142de0ee1e14bcca3e",
    text:
      "Doggo the lazy quick brown fox jumped over  Doggo the lazy quick brown fox jumped over",
    name: "Roseller",
    avatar:
      "//www.gravatar.com/avatar/fd3dece198b24d30203599d42eef2445?s=200&r=pg&d=mm",
    likes: [],
    comments: [],
    date: "2020-09-12T10:04:04.935Z",
  },
  {
    id: "5f5c9d142de0ee1e14bcca3w",
    text: "Doydoy",
    name: "Teodorics",
    avatar:
      "//www.gravatar.com/avatar/fd3dece198b24d30203599d42eef2445?s=200&r=pg&d=mm",
    likes: [],
    comments: [],
    date: "2020-08-12T10:04:04.935Z",
  },
  {
    id: "5f5c9d142de0ee1e14bcca3c",
    text: "Doydoy",
    name: "Teodorics",
    avatar:
      "//www.gravatar.com/avatar/fd3dece198b24d30203599d42eef2445?s=200&r=pg&d=mm",
    likes: [],
    comments: [],
    date: "2020-08-12T10:04:04.935Z",
  },
  {
    id: "5f5c9d142de0ee1e14bcca3f",
    text: "Doydoy",
    name: "Teodorics",
    avatar:
      "//www.gravatar.com/avatar/fd3dece198b24d30203599d42eef2445?s=200&r=pg&d=mm",
    likes: [],
    comments: [],
    date: "2020-08-12T10:04:04.935Z",
  },
];

const Profile = () => {
  const classes = useStyles();
  const [openWE, setOpenWE] = useState(false);
  const [openEditProfile, setOpenEditProfile] = useState(false);

  const handleOpenWE = () => setOpenWE(true);
  const handleCloseWE = () => setOpenWE(false);

  const handleOpenEditProfile = () => setOpenEditProfile(true);
  const handleCloseEditProfile = () => setOpenEditProfile(false);

  return (
    <Grid container>
      <Grid item xs={2} sm={2} md={3} lg={3}>
        <SideMenu />
      </Grid>
      <Grid item xs={10} sm={8} md={6} lg={6}>
        <Box>
          <Box display="flex" justifyContent="space-between">
            <CardHeader
              avatar={
                <Avatar
                  aria-label="profile"
                  src="//www.gravatar.com/avatar/fd3dece198b24d30203599d42eef2445"
                  className={classes.profileAvatar}
                />
              }
              title="Roseller"
              subheader={
                <Box display="flex" alignItems="center">
                  <GitHubIcon fontSize="small" style={{ marginRight: "5px" }} />
                  <Box lineHeight="normal">
                    <Typography variant="body2" color="textSecondary">
                      francisputong
                    </Typography>
                  </Box>
                </Box>
              }
            />
            <Box display="flex" alignItems="center" mr="10px">
              <AppButton
                size="small"
                value="Edit Profile"
                variant="outlined"
                color="primary"
                onClick={handleOpenEditProfile}
              />
              <EditProfileModal
                open={openEditProfile}
                handleClose={handleCloseEditProfile}
              />
            </Box>
          </Box>
          <CardContent>
            <Typography variant="body2" color="textPrimary" component="p">
              Software Engineer based in Manila.
            </Typography>
            <Box display="flex" justifyContent="space-around" mt={0.5}>
              <Box display="flex" alignItems="center">
                <WorkIcon fontSize="small" />
                <Box lineHeight="normal">
                  <Typography variant="body2" color="textSecondary">
                    AAA
                  </Typography>
                </Box>
              </Box>
              <Box display="flex" alignItems="center">
                <LocationOnIcon fontSize="small" />
                <Box lineHeight="normal">
                  <Typography variant="body2" color="textSecondary">
                    Manila
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Divider style={{ margin: "10px" }} />
            <div>
              <Typography
                component="p"
                variant="body1"
                color="textPrimary"
                align="center"
              >
                Skills
              </Typography>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  flexWrap: "wrap",
                  listStyle: "none",
                  margin: 0,
                }}
              >
                {skills.map((skill, i) => (
                  <li key={i}>
                    <Chip style={{ margin: "2px" }} label={skill} />
                  </li>
                ))}
              </div>
            </div>
            <br />
            <Box display="flex" justifyContent="space-around">
              <AppButton
                onClick={handleOpenWE}
                size="small"
                value="Experience"
              />
              <AppButton
                onClick={handleOpenWE}
                size="small"
                value="Education"
              />
            </Box>
            <ProfileModal
              open={openWE}
              handleClose={handleCloseWE}
              experience={experience}
              education={education}
            />
            <Box display="flex" justifyContent="space-around">
              <IconButton>
                <LinkedInIcon style={{ color: "#2867B2" }} fontSize="large" />
              </IconButton>
              <IconButton>
                <FacebookIcon style={{ color: "#4267B2" }} fontSize="large" />
              </IconButton>
              <IconButton>
                <TwitterIcon style={{ color: "#1DA1F2" }} fontSize="large" />
              </IconButton>
            </Box>
            <Typography variant="h5" component="p">
              Posts
            </Typography>
            <Posts posts={posts} />
          </CardContent>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Profile;
