import AuthLayout from "../../Layouts/Auth";
import Card from "../../Layouts/Auth/Card";
import styles from "./style.module.css";
const ForgotPassword: React.FC = (): JSX.Element => {
  return (
    <AuthLayout>
      <Card page={"forgot"}>
        <section className={styles.forgot}>
          <form className={styles.forgot__inputs}>
            <section className={styles.field}>
              <h4 className={styles.field__text}>ایمیل خود را وارد کنید</h4>
              <input className={styles.field__input} type="email" />
            </section>
            <button type="submit" className={styles.field__button}>
              <span className={styles.button__text}>
                دریافت ایمیل بازیابی رمز عبور
              </span>
            </button>
          </form>
        </section>
      </Card>
    </AuthLayout>
  );
};

export default ForgotPassword;
