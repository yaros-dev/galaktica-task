import styles from "./Header.module.css";
import SearchIco from "../../assets/Search.svg";
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
          <div className={styles.language}>EN</div>
          <div className={styles.notify}>N</div>
        </div>

        <div className={styles.profile}>
          <div className={styles.userInfo}>
            <div className={styles.userName}>Peter</div>
            <div className={styles.userRole}>Admin</div>
          </div>
          <div className={styles.avatar}></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
