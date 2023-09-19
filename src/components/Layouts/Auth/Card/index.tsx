import styles from "./style.module.css";

interface ICardProps {
  page: string;
}
const Card: React.FC<React.PropsWithChildren<ICardProps>> = ({
  page,
  children,
}): JSX.Element => {
  return (
    <div className={styles.cardContainer}>
      <h2 className={styles.cardHeading}>
        {page === "login"
          ? "(: به کوئرا تسک منیجر خوش برگشتی"
          : "ثبت‌نام در کوئرا تسک منیجر"}
      </h2>
      {children}
    </div>
  );
};

export default Card;
