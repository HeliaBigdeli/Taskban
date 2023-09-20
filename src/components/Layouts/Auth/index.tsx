import Header from "./Header";
import styles from './style.module.css';

interface IProps extends React.PropsWithChildren{}

const AuthLayout: React.FC<React.PropsWithChildren<IProps>> = ({
  children
}):JSX.Element => {
  return (
      <div className={styles.background}>
        <span className={styles.skewBackground}></span>
        <Header/>
        <div className="flex justify-center items-center h-screen relative">
          {children}
        </div>
      </div>
  );
}

export default AuthLayout;