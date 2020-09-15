import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import ModeCommentOutlinedIcon from "@material-ui/icons/ModeCommentOutlined";
import moment from "moment";

import useStyles from "./styles/post.js";

const Post = ({ post: { text, name, avatar, likes, comments, date } }) => {
  const time = moment(date, "YYYYMMDD").fromNow();

  const classes = useStyles();

  const handleFavorite = (e) => {
    e.stopPropagation();
    console.log("favorite");
  };

  const handleReply = (e) => {
    e.stopPropagation();
    console.log("reply");
  };

  const handlePostClick = (e) => {
    console.log("POST");
  };

  return (
    <ListItem
      onClick={handlePostClick}
      button
      disableRipple
      divider
      alignItems="flex-start"
    >
      <ListItemAvatar>
        <Avatar alt="icon" src={avatar} />
      </ListItemAvatar>
      <div className={classes.container}>
        <ListItemText
          primary={
            <div className={classes.header}>
              {name}{" "}
              <Typography variant="subtitle2" color="textSecondary">
                {time}
              </Typography>
            </div>
          }
          secondary={
            <Typography component="span" variant="body2" color="textPrimary">
              {text}
            </Typography>
          }
        />
        <div className={classes.icon}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <IconButton onClick={handleReply}>
              <ModeCommentOutlinedIcon fontSize="small" />
            </IconButton>
            <Typography color="textPrimary">{comments.length}</Typography>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <IconButton onClick={handleFavorite}>
              <FavoriteBorderOutlinedIcon fontSize="small" />
            </IconButton>
            <Typography color="textPrimary">{likes.length}</Typography>
          </div>
        </div>
      </div>
    </ListItem>
  );
};

export default Post;
