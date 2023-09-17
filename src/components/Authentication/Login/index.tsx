import AuthLayout from "../../Layouts/Auth";
import styles from "./style.module.css";

const Login = () => {
  return (
    <AuthLayout>
      <div className={styles.cardContainer}>
        <h2 className={styles.cardHeading}>
          {"(: به کوئرا تسک منیجر خوش برگشتی"}
        </h2>
        <section className={styles.inputContainer}>
          <div className={styles.inputs}>
            <div className={styles.inputFiled}>
              <h4 className={styles.inputHeader}>ایمیل</h4>
              <input className={styles.input} type="email" />
            </div>
            <div className={styles.inputFiled}>
              <h4 className={styles.inputHeader}>رمز عبور</h4>
              <input className={styles.input} type="password" />
              <span className={styles.passwordReminder}>
                رمز عبور را فراموش کرده‌ای؟
              </span>
            </div>
          </div>
          <div className={styles.buttons}>
            <button className={styles.loginButton} type="submit">
              <span className={styles.buttonText}>ورود</span>
            </button>
            <div className={styles.goRegister}>
              <span className={styles.goRegisterText}>ثبت‌نام</span>
              <span className={styles.goRegisterQuestion}>
                ثبت‌نام نکرده‌ای؟
              </span>
            </div>
          </div>
        </section>
      </div>
    </AuthLayout>
  );
};

export default Login;
