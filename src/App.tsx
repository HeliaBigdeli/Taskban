import { Link } from "react-router-dom";
import logo from "./assets/images/logo.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Link to={`login`}>Login Page</Link>
      <img src={logo} alt="logo" width="260" />
      <p className="bg-red-100 rounded-full px-6 py-2">
        quera bootcamp task manager project
      </p>
      <ul>
        <li>Creat React App Mahsa (CRA)</li>
        <li>Tailwind</li>
        <li>Typescript</li>
        <li>react router</li>
        <li>css modules</li>
        <li>formik</li>
        <li>--- all routes are in routes folder</li>
        <li>--- to start project use "yarn start" and localhost:3000</li>
      </ul>
    </div>
  );
}

export default App;
