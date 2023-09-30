import { Link } from "react-router-dom";
import logo from '../../assets/images/logo.jpg';
import '../../App';

const NotFound :React.FC = () :JSX.Element => {
  return (
   <div>
     <div className="App">
      <img src={logo} alt="logo" width="260"/>     
      <p>Page Not Found :(</p>
      <Link to="/">Back To Home</Link>
    </div>
   </div>
  );
};

export default NotFound;
