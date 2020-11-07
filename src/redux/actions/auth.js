import client from "../../api/client";
import jwtDecode from "jwt-decode";
import { AUTHENTICATE, LOGOUT } from "./types";

export const getUser = () => async (dispatch) => {
  let token = localStorage.getItem("token");
  if (!token) return token;
  const decodedToken = jwtDecode(token);
  const expiryDate = decodedToken.exp;
  const user = decodedToken.user;
  const now = new Date();
  const secondsSinceEpoch = Math.round(now.getTime() / 1000);
  if (expiryDate > secondsSinceEpoch) {
    dispatch({ type: AUTHENTICATE, payload: { token, user } });
  } else {
    dispatch({ type: LOGOUT });
  }
};

export const login = (body, setIsLoading) => async (dispatch) => {
  try {
    const response = await client.post("/auth", body);
    const token = response.data.token;
    const decodedToken = jwtDecode(token);
    const user = decodedToken.user;
    dispatch({ type: AUTHENTICATE, payload: { token, user } });
  } catch (err) {
    setIsLoading(false);
    const error = err.response.data.errors[0] || null;
    return { error };
  }
};

export const register = (body, setIsLoading) => async (dispatch) => {
  try {
    const response = await client.post("/users", body);
    const token = response.data.token;
    const decodedToken = jwtDecode(token);
    const user = decodedToken.user;
    dispatch({ type: AUTHENTICATE, payload: { token, user } });
  } catch (error) {
    setIsLoading(false);
    console.log(error);
  }
};

export const logout = () => async (dispatch) => {
  dispatch({ type: LOGOUT });
};
