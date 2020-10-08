import client from "../../api/client";
import {
  GET_USER_PROFILE,
  CREATE_PROFILE,
  RESET_PROFILE,
  ADD_EXPERIENCE,
  DELETE_EXPERIENCE,
  ADD_EDUCATION,
  DELETE_EDUCATION,
} from "./types";

export const getUserProfile = (profileId) => async (dispatch) => {
  try {
    dispatch({ type: RESET_PROFILE });
    const response = await client.get(`profile/user/${profileId}`);
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

export const addExperience = (expData) => async (dispatch) => {
  try {
    const response = await client.put("profile/experience", expData);
    dispatch({ type: ADD_EXPERIENCE, payload: response.data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteExperience = (expId) => async (dispatch) => {
  try {
    const response = await client.delete(`profile/experience/${expId}`);
    dispatch({ type: DELETE_EXPERIENCE, payload: response.data });
  } catch (error) {
    console.log(error);
  }
};

export const addEducation = (eduData) => async (dispatch) => {
  try {
    const response = await client.put("profile/education", eduData);
    dispatch({ type: ADD_EDUCATION, payload: response.data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteEducation = (eduId) => async (dispatch) => {
  try {
    const response = await client.delete(`profile/education/${eduId}`);
    dispatch({ type: DELETE_EDUCATION, payload: response.data });
  } catch (error) {
    console.log(error);
  }
};
