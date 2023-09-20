import App from "../App";
import ForgotPassword from "../components/Authentication/ForgotPassword"
import Login from "../components/Authentication/Login";
import Register from "../components/Authentication/Register";
import Reset from "../components/Authentication/Reset";
import NotFound from "../components/NotFound";

export const routes = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "register",
    element: <Register />,
  },
  {
    path: "forgot",
    element: <ForgotPassword />,
  },
  {
    path: "reset",
    element: <Reset />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];
