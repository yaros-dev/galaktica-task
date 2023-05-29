import styles from "./CoursesProgress.module.css";

const CoursesProgress = () => {
  let amountCourses = 2;
  let amountFolder = 6;
  let amountGuideliner = 3;
  let allCourses = 16 * 2;
  let allFolder = 11 * 2;
  let allGuideliner = 19 * 2;
  return (
    <div className={styles.statsWrapper}>
      <div className={styles.item}>
        <div className={styles.bar}>
          <div className={styles.levelProgress}>
            <div
              className={styles.percent}
              style={{ "--percent": amountCourses, "--all": allCourses }}
            >
              <svg>
                <circle cx={32} cy={32} r={"32"}></circle>
                <circle cx={32} cy={32} r={"32"}></circle>
              </svg>
            </div>
          </div>
        </div>
        <div className={styles.stat}>
          <div className={styles.number}>
            <span>{amountCourses}</span>/<div className={styles.text}>15</div>
          </div>
          <div className={styles.subtitle}>Courses completed</div>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.bar}>
          <div className={styles.levelProgress2}>
            <div
              className={styles.percent}
              style={{ "--percent": amountFolder, "--all": allFolder }}
            >
              <svg>
                <circle cx={32} cy={32} r={"32"}></circle>
                <circle cx={32} cy={32} r={"32"}></circle>
              </svg>
            </div>
          </div>
        </div>
        <div className={styles.stat}>
          <div className={styles.number}>
            <span>{amountFolder}</span>/<div className={styles.text}>10</div>
          </div>
          <div className={styles.subtitle}>Folders add</div>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.bar}>
          <div className={styles.levelProgress3}>
            <div
              className={styles.percent}
              style={{
                "--percent": amountGuideliner,
                "--all": allGuideliner,
              }}
            >
              <svg>
                <circle cx={32} cy={32} r={"32"}></circle>
                <circle cx={32} cy={32} r={"32"}></circle>
              </svg>
            </div>
          </div>
        </div>
        <div className={styles.stat}>
          <div className={styles.number}>
            <span>{amountGuideliner}</span>/
            <div className={styles.text}>19</div>
          </div>
          <div className={styles.subtitle}>Books read</div>
        </div>
      </div>
    </div>
  );
};

export default CoursesProgress;
