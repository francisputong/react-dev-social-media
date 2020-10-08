import {
  CREATE_POST,
  GET_POSTS,
  GET_POST,
  DELETE_POST,
  LOGOUT,
  UPDATE_LIKES,
  CREATE_COMMENT,
  DELETE_COMMENT,
  RESET_USER_POSTS,
} from "../actions/types";

const initialState = {
  posts: [],
  userPost: {},
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_POSTS:
      return {
        ...state,
        posts: payload,
      };

    case GET_POST:
      state.userPost = {};
      return {
        ...state,
        userPost: payload,
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
        userPost: { ...state.userPost, likes: payload.likes },
      };

    case CREATE_COMMENT:
      return {
        ...state,
        posts: state.posts.map((post) =>
          post._id === payload.postId
            ? { ...post, comments: payload.comments }
            : post
        ),
        userPost: { ...state.userPost, comments: payload.comments },
      };

    case DELETE_COMMENT:
      return {
        ...state,
        userPost: {
          ...state.userPost,
          comments: state.userPost.comments.filter(
            (comment) => comment._id !== payload
          ),
        },
      };

    case RESET_USER_POSTS:
      return {
        ...state,
        posts: [],
        userPost: {},
      };

    case LOGOUT:
      return {
        ...state,
        posts: [],
        userPost: {},
      };

    default:
      return state;
  }
};
