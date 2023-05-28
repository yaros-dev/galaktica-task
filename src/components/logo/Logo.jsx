import { Link } from "react-router-dom";
import styles from "./Logo.module.css";
import LogoImg from "../../assets/logo.svg";

const Logo = () => {
  return (
    <div className={styles.logo}>
      <Link to={"/"}>
        <img src={LogoImg} alt="Logo" />
      </Link>
    </div>
  );
};

export default Logo;
