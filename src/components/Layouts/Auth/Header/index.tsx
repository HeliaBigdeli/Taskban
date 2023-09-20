import styles from './style.module.css';
import { Link } from "react-router-dom";

const Header:React.FC = ():JSX.Element => {
    return (
      <nav className={styles.navbar}>
          <div className={styles.navbarItems}>
            <div className={styles.navbarTitle}>
              کوئرا تسک منیجر
            </div>
            <div className={styles.navbarButtons}>
            <Link to="/register" className={styles.navbarRegisterBtn}>ثبت نام</Link>
            <span>ثبت نام نکرده‌ای؟</span>
            </div>
          </div>
      </nav>
    );
  }
  
export default Header;