import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
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
import { getUserProfile } from "../../redux/actions/profile";
import { getUserPosts } from "../../redux/actions/posts";

const Profile = ({
  getUserProfile,
  getUserPosts,
  posts,
  // profile,
  profile: {
    social,
    skills,
    user,
    company,
    location,
    bio,
    githubusername,
    experience,
    education,
  },
}) => {
  const [profileLoading, setProfileLoading] = useState(false);
  const [postLoading, setPostLoading] = useState(false);

  const getProfile = async () => {
    await getUserProfile();
    setProfileLoading(true);
  };

  const getPosts = async () => {
    await getUserPosts();
    setPostLoading(true);
  };

  useEffect(() => {
    getProfile();
    getPosts();
  }, []);

  const classes = useStyles();
  const [openWE, setOpenWE] = useState(false);
  const [openEditProfile, setOpenEditProfile] = useState(false);

  const handleOpenWE = () => setOpenWE(true);
  const handleCloseWE = () => setOpenWE(false);

  const handleOpenEditProfile = () => setOpenEditProfile(true);
  const handleCloseEditProfile = () => setOpenEditProfile(false);

  return (
    <Grid container>
      <Grid
        item
        style={{
          borderRight: "1px solid rgba(0,0,0,0.12)",
          backgroundClip: "padding-box",
        }}
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
      <Grid
        style={{
          borderRight: "1px solid rgba(0,0,0,0.12)",
          backgroundClip: "padding-box",
        }}
        item
        xs={10}
        sm={8}
        md={6}
        lg={6}
      >
        <Box>
          <div
            style={{
              padding: "5px 0px 5px 16px",
            }}
          >
            <Typography variant="h5">Profile</Typography>
          </div>
          <Divider />
          {profileLoading && postLoading ? (
            <>
              {user ? (
                <>
                  <Box display="flex" justifyContent="space-between">
                    <CardHeader
                      avatar={
                        <Avatar
                          aria-label="profile"
                          src={user.avatar}
                          className={classes.profileAvatar}
                        />
                      }
                      title={user.name}
                      subheader={
                        <Box display="flex" alignItems="center">
                          <GitHubIcon
                            fontSize="small"
                            style={{ marginRight: "5px" }}
                          />
                          <Box lineHeight="normal">
                            <Typography variant="body2" color="textSecondary">
                              {githubusername}
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
                    <Typography
                      variant="body2"
                      color="textPrimary"
                      component="p"
                    >
                      {bio}
                    </Typography>
                    <Box display="flex" justifyContent="space-around" mt={0.5}>
                      <Box display="flex" alignItems="center">
                        <WorkIcon fontSize="small" />
                        <Box lineHeight="normal">
                          <Typography variant="body2" color="textSecondary">
                            {company}
                          </Typography>
                        </Box>
                      </Box>
                      <Box display="flex" alignItems="center">
                        <LocationOnIcon fontSize="small" />
                        <Box lineHeight="normal">
                          <Typography variant="body2" color="textSecondary">
                            {location}
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
                        value="Experience & Education"
                      />
                    </Box>
                    <ProfileModal
                      open={openWE}
                      handleClose={handleCloseWE}
                      experience={experience}
                      education={education}
                      id={user._id}
                    />
                    <Box display="flex" justifyContent="space-around">
                      {social.linkedin && (
                        <IconButton
                          onClick={(e) =>
                            (window.location.href = social.linkedIn)
                          }
                        >
                          <LinkedInIcon
                            style={{ color: "#2867B2" }}
                            fontSize="large"
                          />
                        </IconButton>
                      )}
                      {social.facebook && (
                        <IconButton
                          onClick={(e) =>
                            (window.location.href = social.facebook)
                          }
                        >
                          <FacebookIcon
                            style={{ color: "#4267B2" }}
                            fontSize="large"
                          />
                        </IconButton>
                      )}
                      {social.twitter && (
                        <IconButton
                          onClick={(e) =>
                            (window.location.href = social.twitter)
                          }
                        >
                          <TwitterIcon
                            style={{ color: "#1DA1F2" }}
                            fontSize="large"
                          />
                        </IconButton>
                      )}
                    </Box>
                  </CardContent>
                </>
              ) : (
                <p>This user has no profile</p>
              )}
              <Typography variant="h5" component="p">
                Posts
              </Typography>
              {posts.length > 0 ? (
                <Posts posts={posts} />
              ) : (
                <p>This user has no posts</p>
              )}
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
  profile: state.profile.profile,
  posts: state.post.posts,
});

export default connect(mapStateToProps, { getUserProfile, getUserPosts })(
  Profile
);
