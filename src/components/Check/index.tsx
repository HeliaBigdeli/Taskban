import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { AXIOS } from "../../config/axios.config";
import API_URL from "../../constants/api.url";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { refresh } from "../../features/authSlice";

interface IProps extends React.PropsWithChildren { }

const AuthCheck: React.FC<IProps> = ({ children }): JSX.Element => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const controller = new AbortController()
    const refreshToken = Cookies.get("refresh");

    if (!refreshToken) {
      navigate("/login");
      controller.abort()
    }
    AXIOS.post(API_URL.Refresh, { refresh: refreshToken }, {
      signal: controller.signal
    })
      .then((response) => {
        if (response.status === 200) {
          dispatch(refresh(response.data));
          navigate("/workspace");
        }
      })
      .catch((error) => {
        Cookies.remove('refresh')
        navigate("/login");
      })
      .finally(() => {
        setLoading(false);
      });

    return () => {controller.abort()};
  }, []);
  return <div>{!loading && children}</div>;
};

export default AuthCheck;
