import App from '../App';
import Login from '../components/Authentication/Login';

export const routes = [
    {
      path: "/",
      element: <App />,
    },
    {
      path: "login",
      element: <Login />,
    },
]