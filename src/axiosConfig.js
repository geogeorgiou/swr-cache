import axios from "axios";

export const baseConfig = {
  headers: {
    Accept: "application/json",
    "Content-type": `application/json; charset=utf-8`
  },
  timeout: 5000,
  validateStatus: (status) => status >= 200 && status < 400
};

const axiosInstance = axios.create(baseConfig);

export default axiosInstance;
