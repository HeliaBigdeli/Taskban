import styles from './style.module.css';
import { Link } from "react-router-dom";

const Header:React.FC = ():JSX.Element => {
    return (
      <nav className="fixed w-full z-10">
          <div className="flex items-center justify-between xs:p-[10px] md:p-[20px] lg:px-[80px] lg:pt-[80px]">
            <div className="flex gap-XS items-center">
              <Link to="/register" className="flex justify-center items-center bg-brand-primary p-[10px] w-[95px] text-white h-XL rounded-md"
              >ثبت نام
              </Link>
              <span>ثبت نام نکرده‌ای؟</span>
            </div>
            <Link className={styles.navbarTitle} to="/login">کوئرا تسک منیجر</Link>             
          </div>
      </nav>
    );
  }
  
export default Header;