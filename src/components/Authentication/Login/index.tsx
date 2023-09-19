import { Link } from "react-router-dom";
import AuthLayout from "../../Layouts/Auth";
import Card from "../../Layouts/Auth/Card";
import styles from "./style.module.css";

const Login: React.FC = (): JSX.Element => {
  return (
    <AuthLayout>
      <Card page={"login"}>
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
              <button type="button" className={styles.goRegisterText}>
                <Link to={`/register`}>ثبت‌نام</Link>
              </button>

              <span className={styles.goRegisterQuestion}>
                ثبت‌نام نکرده‌ای؟
              </span>
            </div>
          </div>
        </section>
      </Card>
    </AuthLayout>
  );
};

export default Login;
