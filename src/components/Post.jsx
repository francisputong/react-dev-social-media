import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import ModeCommentOutlinedIcon from "@material-ui/icons/ModeCommentOutlined";
import Box from "@material-ui/core/Box";

import Moment from "react-moment";

const Post = ({ post: { text, name, avatar, likes, comments, date } }) => {
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
      <Box width="100%">
        <ListItemText
          primary={
            <Box display="flex" justifyContent="space-between" mb={0.5}>
              {name}{" "}
              <Typography variant="subtitle2" color="textSecondary">
                <Moment date={date} fromNow />
              </Typography>
            </Box>
          }
          secondary={
            <Typography component="span" variant="body2" color="textPrimary">
              {text}
            </Typography>
          }
        />
        <Box display="flex" alignItems="center" justifyContent="space-around">
          <Box display="flex" alignItems="center">
            <IconButton onClick={handleReply}>
              <ModeCommentOutlinedIcon fontSize="small" />
            </IconButton>
            <Typography color="textPrimary">{comments.length}</Typography>
          </Box>
          <Box display="flex" alignItems="center">
            <IconButton onClick={handleFavorite}>
              <FavoriteBorderOutlinedIcon fontSize="small" />
            </IconButton>
            <Typography color="textPrimary">{likes.length}</Typography>
          </Box>
        </Box>
      </Box>
    </ListItem>
  );
};

export default Post;
