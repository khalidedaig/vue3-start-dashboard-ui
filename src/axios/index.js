import axios from "axios";
import router from "@/router";

// eslint-disable-next-line no-undef
axios.defaults.baseURL = process.env.VUE_APP_BASE_URL;

axios.interceptors.request.use(
  (config) => {
    if (localStorage.getItem("user")) {
      const user = JSON.parse(localStorage.getItem("user"));
      const token = user.access_token;
      if (token) {
        config.headers["Authorization"] = "Bearer " + token;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    const authErrorCode = 401;

    if (error.response.status === authErrorCode) {
      localStorage.removeItem("user");
      router.push({ name: "login" }).catch(() => {});
    }

    return Promise.reject(error);
  }
);

export default axios;
//
