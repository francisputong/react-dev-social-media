import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ModeCommentOutlinedIcon from "@material-ui/icons/ModeCommentOutlined";
import DeleteIcon from "@material-ui/icons/Delete";
import Box from "@material-ui/core/Box";
import Moment from "react-moment";

import { deletePost, likePost } from "../redux/actions/posts";
import PostReplyModal from "./PostReplyModal";

const Post = ({
  userId,
  post: { _id, text, name, avatar, likes, comments, date, user },
  deletePost,
  likePost,
  clickable = true,
}) => {
  const history = useHistory();
  const [openReply, setOpenReply] = useState(false);

  const handleCloseReply = () => setOpenReply(false);

  const handleFavorite = async (e, id) => {
    e.stopPropagation();
    await likePost(id);
  };

  const handleReply = (e) => {
    e.stopPropagation();
    setOpenReply(true);
  };

  const handlePostClick = (e) => {
    e.stopPropagation();
    return history.push(`/post/${name}/${_id}`);
  };

  const handlePostDelete = async (e, id) => {
    e.stopPropagation();
    await deletePost(id);
  };

  const likeCheck = () => {
    if (likes.filter((like) => like.user === userId).length === 0)
      return <FavoriteBorderOutlinedIcon fontSize="small" />;
    else return <FavoriteIcon fontSize="small" />;
  };

  return (
    <>
      <PostReplyModal
        open={openReply}
        handleClose={handleCloseReply}
        name={name}
        postId={_id}
      />
      <ListItem
        onClick={clickable ? handlePostClick : null}
        button={clickable}
        disableRipple={clickable}
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
                <Box>
                  <Typography variant="subtitle2" color="textSecondary">
                    <Moment date={date} fromNow />
                    {userId === user && (
                      <IconButton
                        size="small"
                        onClick={(e) => handlePostDelete(e, _id)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    )}
                  </Typography>
                </Box>
              </Box>
            }
            secondary={
              <Typography component="div" variant="body2" color="textPrimary">
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
              <IconButton onClick={(e) => handleFavorite(e, _id)}>
                {likeCheck()}
              </IconButton>
              <Typography color="textPrimary">{likes.length}</Typography>
            </Box>
          </Box>
        </Box>
      </ListItem>
    </>
  );
};

const mapStateToProps = (state) => ({
  userId: state.auth.user.id,
});

export default connect(mapStateToProps, { deletePost, likePost })(Post);
