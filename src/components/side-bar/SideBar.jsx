import { NavLink } from "react-router-dom";
import Logo from "../logo/Logo";
import HomeIcon from "../../assets/Home.svg";
import Courses from "../../assets/Courses.svg";
import Libraries from "../../assets/Libraries.svg";
import Statistics from "../../assets/Statistics.svg";
import UsersGuideline from "../../assets/Users-guideline.svg";
import Out from "../../assets/Out.svg";
import styles from "./SideBar.module.css";

const SideBar = () => {
  const isActiveButton = ({ isActive }) => {
    return {
      color: isActive ? "#ffffff" : "",
      background: isActive ? "#7789ea" : "",
    };
  };

  return (
    <div className={styles.sidebar}>
      <Logo />
      <div className={styles.menu}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <NavLink to={"/"} className={styles.link} style={isActiveButton}>
              <img className={styles.img} src={HomeIcon} alt="Home" />
              Home
            </NavLink>
          </li>
          <li className={styles.item}>
            <NavLink
              to={"/courses"}
              className={styles.link}
              style={isActiveButton}
            >
              <img className={styles.img} src={Courses} alt="Courses" />
              Courses
            </NavLink>
          </li>
          <li className={styles.item}>
            <NavLink
              to={"/libraries"}
              className={styles.link}
              style={isActiveButton}
            >
              <img className={styles.img} src={Libraries} alt="Libraries" />
              Libraries
            </NavLink>
          </li>
          <li className={styles.item}>
            <NavLink
              to={"/statistics"}
              className={styles.link}
              style={isActiveButton}
            >
              <img className={styles.img} src={Statistics} alt="Statistics" />
              Statistics
            </NavLink>
          </li>
          <span className={styles.line}></span>
          <li className={styles.item}>
            <NavLink
              to={"/users"}
              className={styles.link}
              style={isActiveButton}
            >
              <img
                className={styles.img}
                src={UsersGuideline}
                alt="UsersGuideline"
              />
              Users guideline
            </NavLink>
          </li>
        </ul>
        <div className={styles.item}>
          <NavLink to={"/out"} className={styles.link}>
            <img className={styles.img} src={Out} alt="Out" />
            Sign Out
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
