import Header from "./Header";
import styles from './style.module.css';

interface Props extends React.PropsWithChildren{}

const AuthLayout = ({children}: Props) => {
  return (
      <div className={styles.container}>
        <Header/>
        <div>
          {children}
        </div>
      </div>
  );
}

export default AuthLayout;