import Hand from "../../assets/Hand.png";
import styles from "./BoardProgress.module.css";

const BoardProgress = () => {
  let levelPercent = 37;
  return (
    <div className={styles.boardProgress} style={{ "--num": levelPercent }}>
      <div>
        <div>
          <div className={styles.titleName}>
            Hey, Peter!
            <img src={Hand} alt="Hand emoji" />
          </div>
          <div className={styles.subtitle}>
            Here’s complex overview of your progress
          </div>
        </div>
        <div className={styles.levelProgress}>
          <div className={styles.levelValue}>
            4<div className={styles.lableLevel}>level</div>
          </div>
          <div className={styles.percent} style={{ "--num": levelPercent }}>
            <div className={styles.dot}></div>
            <svg>
              <circle cx={100} cy={100} r={"100"}></circle>
              <circle cx={100} cy={100} r={"100"}></circle>
            </svg>
          </div>
        </div>
        <div className={styles.nextLevel}>
          {100 - levelPercent}% to reach next level
        </div>
      </div>
    </div>
  );
};

export default BoardProgress;
