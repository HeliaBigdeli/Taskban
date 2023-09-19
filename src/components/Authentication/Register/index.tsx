import AuthLayout from "../../Layouts/Auth";
import Card from "../../Layouts/Auth/Card";
import styles from "./style.module.css";
const Register: React.FC = (): JSX.Element => {
  return (
    <AuthLayout>
      <Card page={"register"}>
        <section className={styles.inputContainer}>
          <div className={styles.inputs}>
            <div className={styles.inputFiled}>
              <h4 className={styles.inputHeader}>نام کامل</h4>
              <input className={styles.input} type="text" />
            </div>
            <div className={styles.inputFiled}>
              <h4 className={styles.inputHeader}>ایمیل</h4>
              <input className={styles.input} type="email" />
            </div>
            <div className={styles.inputFiled}>
              <h4 className={styles.inputHeader}>رمز عبور</h4>
              <input className={styles.input} type="password" />
            </div>
            <div className={styles.checkboxContainer}>
              <span className={styles.checkboxText}>
                .قوانین و مقررات را می‌پذیرم
              </span>
              <input className={styles.checkbox} type="checkbox" />
            </div>
            <button className={styles.buttonContainer}>
              <span className={styles.buttonText}>ثبت‌نام</span>
            </button>
          </div>
        </section>
      </Card>
    </AuthLayout>
  );
};

export default Register;
