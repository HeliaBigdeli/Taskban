import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { AXIOS } from "../../config/axios.config";
import API_URL from "../../constants/api.url";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { refresh } from "../../features/auth/authSlice";
import { setting } from "../../constants/url";
import { selectSetting } from "../../features/setting/settingSlice";
import { useSelector } from "react-redux";
import { store } from "../../app/store";

interface IProps extends React.PropsWithChildren {}

const AuthCheck: React.FC<IProps> = ({ children }): JSX.Element => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { pathname, search } = useLocation();
  const appSetting = useSelector(selectSetting);
  const [color, setColor] = useState(appSetting.theme);

  const getTheme = async () => {
    const url = setting.get();
    const res = await AXIOS.get(url);
    if (res?.status === 200) {
      setColor(res.data[0].theme);
    }
  };
  const root = document.documentElement;
  root.style.setProperty("--color-primary", color);

  useEffect(() => {
    const controller = new AbortController();
    const refreshToken = Cookies.get("refresh");

    if (pathname === "/Reset-password/") {
      setLoading(false);

      return;
    }
    if (!refreshToken) {
      navigate("/login");
      controller.abort();
    }
    AXIOS.post(
      API_URL.Refresh,
      { refresh: refreshToken },
      {
        signal: controller.signal,
      }
    )
      .then((response) => {
        if (response.status === 200) {
          dispatch(refresh(response.data));
          getTheme();
          if (
            pathname === "/" ||
            pathname === "/login" ||
            pathname === "/register" ||
            pathname === "/forgot"
          ) {
            store.dispatch(refresh(response.data.access));
            navigate("workspaces");
          } else {
            navigate(pathname + search);
          }
        }
      })
      .catch((error) => {
        Cookies.remove("refresh");
        localStorage.removeItem("user");
        navigate("/login");
      })
      .finally(() => {
        setLoading(false);
      });
    return () => {
      controller.abort();
    };
  }, []);
  return <div>{!loading && children}</div>;
};

export default AuthCheck;
