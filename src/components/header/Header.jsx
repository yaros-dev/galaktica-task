import Notification from "../../assets/Notification.svg";
import ArrowDown from "../../assets/ArrowDown.svg";
import Avatar from "../../assets/Avatar.png";
import Search from "../search/Search";
import styles from "./Header.module.css";
const Header = () => {
  return (
    <div className={styles.header}>
      <Search />
      <div className={styles.wrapper}>
        <div className={styles.wrapperNotify}>
          <div className={styles.selectContainer}>
            <select className={styles.selectBox}>
              <option value="UA">UA</option>
              <option value="EN">EN</option>
            </select>
            <div className={styles.iconContainer}>
              <img src={ArrowDown} alt="ArrowDown" />
            </div>
          </div>
          <button className={styles.notify}>
            <img src={Notification} alt="Notification" />
          </button>
        </div>

        <div className={styles.profile}>
          <div className={styles.userInfo}>
            <div className={styles.userName}>Peter</div>
            <div className={styles.userRole}>Admin</div>
          </div>
          <div className={styles.avatar}>
            <img className={styles.avatar} src={Avatar} alt="Avatar" />
            <span className={styles.badgeCircle}></span>
            <span className={styles.badge}></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
