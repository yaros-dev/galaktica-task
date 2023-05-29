import SearchIco from "../../assets/Search.svg";
import styles from "./Search.module.css";

const Search = () => {
  return (
    <form className={styles.searchForm}>
      <div className={styles.wrapperInput}>
        <img className={styles.img} src={SearchIco} alt="Search" />
        <input type="text" className={styles.input} placeholder="Search..." />
      </div>
    </form>
  );
};

export default Search;
