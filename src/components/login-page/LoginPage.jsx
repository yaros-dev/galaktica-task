import { Link } from "react-router-dom";
import styles from "./LoginPage.module.css";

const LoginPage = () => {
  return (
    <div className={styles.wrapper}>
      <Link to={"/"}>
        <button className={styles.loginBtn}>Login</button>
      </Link>
    </div>
  );
};

export default LoginPage;
