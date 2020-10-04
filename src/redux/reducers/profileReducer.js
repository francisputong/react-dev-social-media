import { GET_USER_PROFILE } from "../actions/types";

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

    default:
      return state;
  }
};
