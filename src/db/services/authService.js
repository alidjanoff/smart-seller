import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://ilkin0001dev.bsite.net/api/auth",
});

export const registerUser = (data) => {
  return axiosInstance.post("", data);
};

export const loginUser = (data) => {
  return axiosInstance.post("/login", data);
};

export const googleLogin = (data) => {
  return axiosInstance.post("/google-login",  data);
};
