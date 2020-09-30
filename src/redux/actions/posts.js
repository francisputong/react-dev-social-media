import client from "../../api/client";
import { CREATE_POST, GET_POSTS, DELETE_POST, UPDATE_LIKES } from "./types";

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
    console.log(error.response);
  }
};
