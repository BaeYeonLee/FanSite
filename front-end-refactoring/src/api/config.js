import axios from "axios";
import { API_URL } from "./urls";

const AUTH_TOKEN = "API_KEY";

const instance = axios.create({
  baseURL: API_URL,
});

instance.defaults.headers.common["Authorization"] = AUTH_TOKEN;
instance.defaults.headers.common["content-type"] = "application/json; charset=utf-8";

instance.interceptors.response.use(
  function (response) {
    // Do something with response data
    return response.data;
  },
  function (error) {
    // Do something with response error
    console.log(`----------> ERROR RESPONSE : ${error.config.url}`);
    console.log(`----------> ERROR MESSAGE  : ${error.message}`);
    return Promise.reject(error);
  }
);

export default instance;
