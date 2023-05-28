import SearchIco from "../../assets/Search.svg";
import Notification from "../../assets/Notification.svg";
import ArrowDown from "../../assets/ArrowDown.svg";
import Avatar from "../../assets/Avatar.png";
import styles from "./Header.module.css";
const Header = () => {
  return (
    <div className={styles.header}>
      <form className={styles.searchForm}>
        <div className={styles.wrapperInput}>
          <img className={styles.img} src={SearchIco} alt="Search" />
          <input type="text" className={styles.input} placeholder="Search..." />
        </div>
      </form>
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
            <span className={styles.badge} data-color-badge="#67d37f"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
