import axios from "axios";

const apiClient = axios.create({
  baseURL: process.env.REACT_APP_REST_API_URL,
});

apiClient.interceptors.request.use(function (config) {
  const token = localStorage.getItem("token");
  config.headers.common["x-auth-token"] = token ? token : "";
  return config;
});

export default apiClient;
