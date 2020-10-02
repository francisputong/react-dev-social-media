import {
  CREATE_POST,
  GET_POSTS,
  DELETE_POST,
  LOGOUT,
  UPDATE_LIKES,
  CREATE_COMMENT,
} from "../actions/types";

const initialState = {
  posts: [],
  userPost: [],
  likedPosts: [],
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_POSTS:
      return {
        ...state,
        posts: payload,
      };

    case CREATE_POST:
      return {
        ...state,
        posts: [payload, ...state.posts],
      };

    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((post) => post._id !== payload),
      };

    case UPDATE_LIKES:
      return {
        ...state,
        posts: state.posts.map((post) =>
          post._id === payload.postId ? { ...post, likes: payload.likes } : post
        ),
      };

    case CREATE_COMMENT:
      return {
        ...state,
        posts: state.posts.map((post) =>
          post._id === payload.postId
            ? { ...post, comments: payload.comments }
            : post
        ),
      };

    case LOGOUT:
      return {
        ...state,
        posts: [],
      };

    default:
      return state;
  }
};
