import App from "../App";
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
];
