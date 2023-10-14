import axios from "axios";
import { store } from "../app/store";
import { refresh } from "../features/authSlice";
import Cookies from "js-cookie";
import API_URL from "../constants/api.url";
import { toast } from "react-toastify";

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
  (response) => {
    if (
      response.status === 200 ||
      response.status === 201 ||
      response.status === 204
    ) {
      toast.info("عملیات با موفقیت انجام شد.", {
        position: "bottom-left",
        autoClose: 3000,
      });
    }
    return response;
  },
  async (error) => {
    const request = error.config;

    if (error.response.status === 401 && request.url !== API_URL.Login) {
      try {
        const refreshToken = Cookies.get("refresh");

        const refreshRequest = await AXIOS.post(API_URL.Refresh, {
          refresh: refreshToken,
        });
        const access = refreshRequest.data.access;

        store.dispatch(refresh(access));

        request.headers.Authorization = `Bearer ${access}`;
        return axios(request);
      } catch (error) {
        window.location.href = "/Login";
      }
    } else {
      toast.error(error.response.data.detail, {
        position: "bottom-left",
        autoClose: 3000,
      });
      return Promise.reject(error);
    }
  }
);