import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://dev-social-rest-api.herokuapp.com/api",
});

apiClient.interceptors.request.use(function (config) {
  const token = localStorage.getItem("token");
  config.headers.common["x-auth-token"] = token ? token : "";
  return config;
});

export default apiClient;
