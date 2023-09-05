import axios from "axios";

export const request = axios.create({
  baseURL: import.meta.env.VITE_API,
  timeout: 3 * 1000,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});

request.interceptors.response.use((response) => {
  return response.data;
});
