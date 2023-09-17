import styles from './style.module.css';

const Header = () => {
    return (
      <nav className={styles.navbar}>
          <div className={styles.navbarItems}>
            <div className={styles.navbarTitle}>
              کوئرا تسک منیجر
            </div>
            <div className={styles.navbarButtons}>
              <button className={styles.navbarRegisterBtn}>ثبت نام</button>
              <span>ثبت نام نکرده‌ای؟</span>
            </div>
          </div>
      </nav>
    );
  }
  
export default Header;