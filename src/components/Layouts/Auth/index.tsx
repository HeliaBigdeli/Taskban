import Header from "./Header";
import styles from './style.module.css';

interface Props extends React.PropsWithChildren{}

const AuthLayout = ({children}: Props) => {
  return (
      <div className={styles.background}>
        <span className={styles.skewBackground}></span>
        <Header/>
        <div className={styles.container}>
          {children}
        </div>
      </div>
  );
}

export default AuthLayout;