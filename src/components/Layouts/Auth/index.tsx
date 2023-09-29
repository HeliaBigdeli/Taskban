import { Outlet } from "react-router-dom";
import Header from "./Header";
import styles from './style.module.css';

const AuthLayout: React.FC = ():JSX.Element => {
  return (
      <div className={styles.background}>
        <span className={styles.skewBackground}></span>
        <Header />
        <div className="flex justify-center items-center h-screen relative">
          <Outlet />
        </div>
      </div>
  );
}

export default AuthLayout;