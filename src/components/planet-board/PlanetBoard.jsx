import styles from "./PlanetBoard.module.css";
import planet1 from "../../assets/planet1.svg";
import planet3 from "../../assets/planet3.svg";
import planet4 from "../../assets/planet4.svg";
import planet5 from "../../assets/planet5.svg";

const PlanetBoard = () => {
  let percent = 37;

  return (
    <div className={styles.planetsWrapper}>
      <div className={styles.planets}>
        <div className={styles.palanetItem}>
          <img src={planet1} alt="Planet" />
        </div>
        <div className={styles.levelProgress}>
          <div className={styles.percent} style={{ "--percent": percent }}>
            <div className={styles.dot}></div>
            <svg>
              <circle cx={57} cy={57} r={"57"}></circle>
              <circle cx={57} cy={57} r={"57"}></circle>
            </svg>
          </div>
          <span className={styles.astronaut}></span>
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
      <div className={styles.lablePercent}>{percent}% Completed</div>
    </div>
  );
};

export default PlanetBoard;
