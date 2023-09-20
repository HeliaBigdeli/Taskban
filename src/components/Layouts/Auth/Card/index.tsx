import styles from "./style.module.css";

interface ICardProps {
  page: string;
}
const Card: React.FC<React.PropsWithChildren<ICardProps>> = ({
  page,
  children,
}): JSX.Element => {
  return (
    <div className={`${styles.card} ${page === "forgot"&&styles.forgot}`}>
      <h2 className={styles.card__heading}>
      {page === "login"
          ? "(: به کوئرا تسک منیجر خوش برگشتی"
          : page === "register"
          ? "ثبت‌نام در کوئرا تسک منیجر"
          : page === "forgot"
          ? "فراموشی رمز عبور"
          : null}
      </h2>
      {children}
    </div>
  );
};

export default Card;
