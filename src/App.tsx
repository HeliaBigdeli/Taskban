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
import { AppContext } from "./context/store";
import { useState } from "react";


function App() {
  const [dateValues, setDateValues] = useState<any>({currentMonth: 0, year: '', month: '', today: 0, monthName: ''});
  
  return (
    <AppContext.Provider value={{dateValues, setDateValues}}>
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
    </AppContext.Provider>
  );
}

export default App;
