import axios, { AxiosInstance } from "axios";

const apiUrl = "http://localhost:8000/api/v1";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: apiUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
