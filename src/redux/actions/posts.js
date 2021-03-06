import client from "../../api/client";
import {
  CREATE_POST,
  GET_POSTS,
  GET_POST,
  DELETE_POST,
  UPDATE_LIKES,
  CREATE_COMMENT,
  DELETE_COMMENT,
  RESET_USER_POSTS,
} from "./types";

export const createPost = (text) => async (dispatch) => {
  try {
    const response = await client.post("/posts", { text });
    dispatch({ type: CREATE_POST, payload: response.data });
  } catch (error) {
    console.log(error.response);
  }
};

export const getPosts = () => async (dispatch) => {
  try {
    const response = await client.get("/posts");
    dispatch({ type: GET_POSTS, payload: response.data });
  } catch (error) {
    console.log(error.response);
  }
};

export const getPost = (postId) => async (dispatch) => {
  try {
    const response = await client.get(`/posts/${postId}`);
    dispatch({ type: GET_POST, payload: response.data });
  } catch (error) {
    console.log(error.response);
  }
};

export const getUserPosts = (userPostsId) => async (dispatch) => {
  try {
    dispatch({ type: RESET_USER_POSTS });
    const response = await client.get(`posts/user/${userPostsId}`);
    dispatch({ type: GET_POSTS, payload: response.data });
  } catch (error) {
    console.log(error.response);
  }
};

export const deletePost = (postId) => async (dispatch) => {
  try {
    await client.delete(`/posts/${postId}`);
    dispatch({ type: DELETE_POST, payload: postId });
  } catch (error) {
    console.log(error.response);
  }
};

export const likePost = (postId) => async (dispatch) => {
  try {
    const response = await client.put(`/posts/like/${postId}`);
    dispatch({ type: UPDATE_LIKES, payload: { postId, likes: response.data } });
  } catch (error) {
    console.log(error);
  }
};

export const createComment = (postId, text) => async (dispatch) => {
  try {
    const response = await client.post(`/posts/comment/${postId}`, text);
    dispatch({
      type: CREATE_COMMENT,
      payload: { postId, comments: response.data },
    });
  } catch (error) {
    console.log(error.response);
  }
};

export const deleteComment = (postId, commentId) => async (dispatch) => {
  try {
    await client.delete(`/posts/comment/${postId}/${commentId}`);
    dispatch({
      type: DELETE_COMMENT,
      payload: commentId,
    });
  } catch (error) {
    console.log(error.response);
  }
};
