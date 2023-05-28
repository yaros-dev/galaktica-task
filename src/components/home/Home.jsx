import BoardProgress from "../board-progress/BoardProgress";
import planet1 from "../../assets/planet1.svg";
import planet2 from "../../assets/Planet-m.svg";
import planet3 from "../../assets/planet3.svg";
import planet4 from "../../assets/planet4.svg";
import planet5 from "../../assets/planet5.svg";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.boardWrapper}>
        <BoardProgress />
        <div className={styles.analiticsWrapper}>
          <div className={styles.planetsWrapper}>
            <div className={styles.planets}>
              <div className={styles.palanetItem}>
                <img src={planet1} alt="Planet" />
              </div>
              <div className={styles.palanetItem2}>
                <img src={planet2} alt="Planet 1" />
              </div>
              <div className={styles.palanetItem}>
                <img src={planet3} alt="Planet 2" />
              </div>
              <div className={styles.palanetItem}>
                <img src={planet4} alt="Planet 3" />
              </div>
              <div className={styles.palanetItem}>
                <img src={planet5} alt="Planet 4" />
              </div>
            </div>
            <div className={styles.lablePrecent}>37% Completed</div>
          </div>
          <div className={styles.statsWrapper}>
            <div className={styles.item}>xcvxc</div>
            <div className={styles.item}>xcvx</div>
            <div className={styles.item}>xcvxc</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
