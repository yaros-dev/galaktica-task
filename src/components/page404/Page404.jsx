import { Link } from "react-router-dom";
import styles from "./Page404.module.css";

const Page404 = () => {
  return (
    <div className={styles.page}>
      <h1> Page not found!</h1>
      <Link to={"/"}>
        <h2 className={styles.h2}>← Back to Home!</h2>
      </Link>
    </div>
  );
};

export default Page404;
