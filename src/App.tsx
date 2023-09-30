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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthLayout />}>
            <Route index element={<Login/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/forgot" element={<ForgotPassword/>}/>
            <Route path="/reset" element={<Reset/>}/>
        </Route>
        <Route path="/" element={<DashboardLayout/>}>
          <Route path="/board" element={<Board />}/>
          <Route path="/list" element={<List />}/>
          <Route path="/calender" element={<Calender />}/>
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
