import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Authentication/Login";
import Register from "./components/Authentication/Register";
import ForgotPassword from "./components/Authentication/ForgotPassword";
import Reset from "./components/Authentication/Reset";
import NotFound from "./components/NotFound";
import Board from "./components/Dashboard/Board";
import DashboardLayout from "./components/Layouts/Dashboard";
import AuthLayout from "./components/Layouts/Auth";

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
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
