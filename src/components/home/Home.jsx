import BoardProgress from "../board-progress/BoardProgress";
import PlanetBoard from "../planet-board/PlanetBoard";
import CoursesProgress from "../courses-progress/CoursesProgress";
import Additions from "../additions/Additions";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div
      className={`${styles.home} ${styles.animated} ${styles.animatedFadeInUp} ${styles.fadeInUp}`}
    >
      <div className="">
        <div className={styles.boardWrapper}>
          <BoardProgress />
          <div className={styles.analiticsWrapper}>
            <PlanetBoard />
            <CoursesProgress />
          </div>
        </div>
        <div className={styles.addWrapper}>
          <Additions />
          <Additions />
          <Additions />
        </div>
      </div>
    </div>
  );
};

export default Home;
