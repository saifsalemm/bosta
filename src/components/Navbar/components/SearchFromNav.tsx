import SEARCH from "../../../assets/search-svgrepo-com.svg";
import useSearchForShipment from "../../../hooks/useSearchForShipment";
import styles from "../navbar.module.css";

const SearchFromNav = () => {
  const { inputRef, fetchShipmentData, searchText, searchButton } =
    useSearchForShipment();
  return (
    <div className={styles.searchFromNav}>
      <p className={styles.searchTitle}>{searchText}</p>
      <div className={styles.searchFromNavForm}>
        <input
          ref={inputRef}
          className={styles.input}
          type="text"
          placeholder="رقم التتبع"
        />
        <button onClick={() => fetchShipmentData()} className={styles.button}>
          <img src={SEARCH} height={20} width={20} alt={searchButton} />
        </button>
      </div>
    </div>
  );
};

export default SearchFromNav;
