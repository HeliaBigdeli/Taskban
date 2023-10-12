import axios from "axios";
import { store } from "../app/store";
import { refresh } from "../features/authSlice";
import Cookies from "js-cookie";

export const AXIOS = axios.create({
  baseURL: "https://quera.iran.liara.run/",
});

AXIOS.interceptors.request.use(
  (config) => {
    const token = store.getState().auth.access;

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

AXIOS.interceptors.response.use(
  (response) => response,
  async (error) => {
    const request = error.config;

    if (error.response.status === 401 && request.url !== "accounts/login/") {
      request._retry = true;

      try {
        const refreshToken = Cookies.get("refresh");

        const refreshRequest = await AXIOS.post("/accounts/refresh/", {
          refresh: refreshToken,
        });
        const access = refreshRequest.data.access;

        store.dispatch(refresh(access));

        request.headers.Authorization = `Bearer ${access}`;
        return axios(request);
      } catch (error) {
        console.log("refresh token failed too!");
      }
    }
  }
);
