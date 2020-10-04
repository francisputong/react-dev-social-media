import client from "../../api/client";
import { GET_USER_PROFILE } from "./types";

export const getUserProfile = () => async (dispatch) => {
  try {
    const response = await client.get("/profile/me");
    dispatch({ type: GET_USER_PROFILE, payload: response.data });
  } catch (error) {
    console.log(error.response);
  }
};
