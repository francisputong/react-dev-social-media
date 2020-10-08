import {
  GET_USER_PROFILE,
  CREATE_PROFILE,
  RESET_PROFILE,
  ADD_EXPERIENCE,
  DELETE_EXPERIENCE,
  ADD_EDUCATION,
  DELETE_EDUCATION,
} from "../actions/types";

const initialState = {
  profile: {},
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_USER_PROFILE:
      return {
        ...state,
        profile: payload,
      };

    case CREATE_PROFILE:
      return {
        ...state,
        profile: payload,
      };

    case ADD_EXPERIENCE:
    case DELETE_EXPERIENCE:
    case ADD_EDUCATION:
    case DELETE_EDUCATION:
      return {
        ...state,
        profile: payload,
      };

    case RESET_PROFILE:
      return {
        ...state,
        profile: {},
      };

    default:
      return state;
  }
};
