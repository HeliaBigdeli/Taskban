import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Authentication/Login";
import Register from "./pages/Authentication/Register";
import ForgotPassword from "./pages/Authentication/ForgotPassword";
import Reset from "./pages/Authentication/Reset";
import NotFound from "./pages/NotFound";
import Board from "./pages/Dashboard/Board";
import DashboardLayout from "./components/Layouts/Dashboard";
import AuthLayout from "./components/Layouts/Auth";
import List from "./pages/Dashboard/List";
import Calender from "./pages/Dashboard/Calender";
import ProfileLayout from "./components/Layouts/Profile";
import Account from "./pages/Profile/Account";
import Information from "./pages/Profile/Information";
import Setting from "./pages/Profile/Setting";
import ContextProvider from "./context/store";
import WorkSpace from "./pages/Dashboard/WorkSpaces";
import { Provider } from "react-redux";
import { store } from "../src/app/store";
import { ToastContainer } from "react-toastify";

function App() { 
  return (
    <ContextProvider>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AuthLayout />}>
              <Route index element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/forgot" element={<ForgotPassword />} />
              <Route path="/reset" element={<Reset />} />
            </Route>
            <Route path="/" element={<DashboardLayout />}>
              <Route path="/board" element={<Board />} />
              <Route path="/list" element={<List />} />
              <Route path="/workspace" element={<WorkSpace />} />
              <Route path="/calender" element={<Calender />} />
            </Route>
            <Route path="/" element={<ProfileLayout />}>
              <Route path="/account" element={<Account />} />
              <Route path="/information" element={<Information />} />
              <Route path="/setting" element={<Setting />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </Provider>
      <ToastContainer style={{ width: "400px" }} />
    </ContextProvider>
  );
}

export default App;
