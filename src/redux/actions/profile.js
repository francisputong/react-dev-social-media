import client from "../../api/client";
import { GET_USER_PROFILE, CREATE_PROFILE } from "./types";

export const getUserProfile = () => async (dispatch) => {
  try {
    const response = await client.get("/profile/me");
    dispatch({ type: GET_USER_PROFILE, payload: response.data });
  } catch (error) {
    console.log(error.response);
  }
};

export const createProfile = (profileData) => async (dispatch) => {
  try {
    const response = await client.post("/profile", profileData);
    dispatch({ type: CREATE_PROFILE, payload: response.data });
  } catch (error) {
    console.log(error.response);
  }
};
