import { Link } from "react-router-dom";
import AuthLayout from "../../Layouts/Auth";
import Card from "../../Layouts/Auth/Card";
import styles from "./style.module.css";

const Login: React.FC = (): JSX.Element => {
  return (
    <AuthLayout>
      <Card page={"login"}>
        <section className={styles.login}>
          <div className={styles.login__inputs}>
            <div className={styles.filed}>
              <h4 className={styles.field__header}>ایمیل</h4>
              <input className={styles.field__input} type="email" />
            </div>
            <div className={styles.filed}>
              <h4 className={styles.field__header}>رمز عبور</h4>
              <input className={styles.field__input} type="password" />
              <span className={styles.field__input__reminder}>
                رمز عبور را فراموش کرده‌ای؟
              </span>
            </div>
          </div>
          <div className={styles.login__buttons}>
            <button className={styles.login__buttons__button} type="submit">
              <span className={styles.button__text}>ورود</span>
            </button>
            <div className={styles.goregister}>
              <button type="button" className={styles.goRegister__text}>
                <Link to={`/register`}>ثبت‌نام</Link>
              </button>

              <span className={styles.goregister__question}>
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
