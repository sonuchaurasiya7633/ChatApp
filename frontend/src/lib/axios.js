import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? "https://chatapp-back-2lgn.onrender.com/api" : "/api",
  withCredentials: true,
});
