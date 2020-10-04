import React from "react";
import { connect } from "react-redux";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import Moment from "react-moment";

import { deleteComment } from "../redux/actions/posts";

const Comment = ({
  userId,
  postId,
  comment: { _id, date, text, user, name, avatar },
  deleteComment,
}) => {
  const handleCommentDelete = async (e, id) => {
    e.stopPropagation();
    await deleteComment(postId, id);
  };

  return (
    <ListItem divider alignItems="flex-start">
      <ListItemAvatar>
        <Avatar src={avatar} alt="icon" />
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
                      onClick={(e) => handleCommentDelete(e, _id)}
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
      </Box>
    </ListItem>
  );
};

const mapStateToProps = (state) => ({
  userId: state.auth.user.id,
});

export default connect(mapStateToProps, { deleteComment })(Comment);
