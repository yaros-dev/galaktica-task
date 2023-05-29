import PlusIco from "../../assets/plus-icon.svg";
import ImgFirst from "../../assets/image1-addtitions.png";
import ImgSec from "../../assets/image2-addtitions.png";
import styles from "./Additions.module.css";

const Additions = () => {
  return (
    <div className={styles.additions}>
      <div className={styles.top}>
        <div className={styles.topInner}>
          <button className={styles.addBtn}></button>
          <div className={styles.title}>New Additions</div>
        </div>
        <button className={styles.details}></button>
      </div>
      <div className={styles.counter}>
        <div className={styles.courses}>23</div>
        <div className={styles.users}>2424</div>
      </div>
      <div className={styles.images}>
        <div className={styles.image}>
          <img src={ImgFirst} alt="Image" />
        </div>
        <div className={styles.image}>
          <img src={ImgSec} alt="Image" />
        </div>
        <div className={`${styles.image}  `}>
          <img src={ImgSec} alt="Image" />
          <div className={styles.imageFilter}>
            <img src={PlusIco} alt="Plus" />
            10
          </div>
        </div>
      </div>
    </div>
  );
};

export default Additions;
