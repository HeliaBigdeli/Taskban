import Header from "./Header";
import styles from './style.module.css';

interface IProps extends React.PropsWithChildren{
  page: string
}

const AuthLayout: React.FC<IProps> = ({
  children,
  page
}):JSX.Element => {
  return (
      <div className={styles.background}>
        <span className={styles.skewBackground}></span>
        <Header page={page} />
        <div className="flex justify-center items-center h-screen relative">
          {children}
        </div>
      </div>
  );
}

export default AuthLayout;