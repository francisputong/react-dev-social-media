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
import Hidden from "@material-ui/core/Hidden";

import AppButton from "../AppButton";
import ProfileModal from "../ProfileModal";
import EditProfileModal from "../EditProfileModal";
import Posts from "../Posts";
import SideMenu from "../SideMenu";
import CircularProgress from "@material-ui/core/CircularProgress";

import useStyles from "../styles/profileCard.js";
import { getUserProfile } from "../../redux/actions/profile";
import { getUserPosts } from "../../redux/actions/posts";
import { logout } from "../../redux/actions/auth";

const Profile = ({
  getUserProfile,
  getUserPosts,
  logout,
  posts,
  match,
  userId,
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

  const getProfile = async (profileId) => {
    await getUserProfile(profileId);
    setProfileLoading(true);
  };

  const getPosts = async (userPostsId) => {
    await getUserPosts(userPostsId);
    setPostLoading(true);
  };

  useEffect(() => {
    getProfile(match.params.id);
    getPosts(match.params.id);
  }, [match.params.id]);

  const classes = useStyles();
  const [openWE, setOpenWE] = useState(false);
  const [openEditProfile, setOpenEditProfile] = useState(false);

  const handleOpenWE = () => setOpenWE(true);
  const handleCloseWE = () => setOpenWE(false);

  const handleOpenEditProfile = () => setOpenEditProfile(true);
  const handleCloseEditProfile = () => setOpenEditProfile(false);

  const handleLogOut = () => logout();

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
          <Box
            padding="5px 16px 5px 16px"
            display="flex"
            justifyContent="space-between"
          >
            <Typography variant="h5">Profile</Typography>
            <AppButton
              size="small"
              value="Log out"
              color="primary"
              onClick={handleLogOut}
            />
          </Box>
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
                      {userId === match.params.id && (
                        <AppButton
                          size="small"
                          value="Edit Profile"
                          variant="outlined"
                          color="primary"
                          onClick={handleOpenEditProfile}
                        />
                      )}
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
                      {social?.linkedin && (
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
                      {social?.facebook && (
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
                      {social?.twitter && (
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
                <p>
                  No profile{" "}
                  {userId === match.params.id && (
                    <AppButton
                      size="small"
                      value="Edit Profile"
                      variant="outlined"
                      color="primary"
                      onClick={handleOpenEditProfile}
                    />
                  )}
                  <EditProfileModal
                    open={openEditProfile}
                    handleClose={handleCloseEditProfile}
                  />
                </p>
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
  profile: state.profile.profile,
  posts: state.post.posts,
  userId: state.auth.user.id,
});

export default connect(mapStateToProps, {
  getUserProfile,
  getUserPosts,
  logout,
})(Profile);
