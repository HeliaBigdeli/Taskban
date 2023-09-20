import App from "../App";
import ForgotPassword from "../components/Authentication/ForgotPassword";
import Login from "../components/Authentication/Login";
import Register from "../components/Authentication/Register";

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
];
