import AuthLayout from "../../Layouts/Auth";
import Card from "../../Layouts/Auth/Card";
import styles from "./style.module.css";
const Register: React.FC = (): JSX.Element => {
  return (
    <AuthLayout>
      <Card page={"register"}>
        <section className={styles.register}>
          <form className={styles.register__inputs}>
            <div className={styles.filed}>
              <h4 className={styles.field__header}>نام کامل</h4>
              <input className={styles.field__input} type="text" />
            </div>
            <div className={styles.filed}>
              <h4 className={styles.field__header}>ایمیل</h4>
              <input className={styles.field__input} type="email" />
            </div>
            <div className={styles.filed}>
              <h4 className={styles.field__header}>رمز عبور</h4>
              <input className={styles.field__input} type="password" />
            </div>
            <div className={styles.accept}>
              <span className={styles.accept__text}>
                .قوانین و مقررات را می‌پذیرم
              </span>
              <input className={styles.accept__checkbox} type="checkbox" />
            </div>
            <button type="submit" className={styles.button}>
              <span className={styles.button__text}>ثبت‌نام</span>
            </button>
          </form>
        </section>
      </Card>
    </AuthLayout>
  );
};

export default Register;
