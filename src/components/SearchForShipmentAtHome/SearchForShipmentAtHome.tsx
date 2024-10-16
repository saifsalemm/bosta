import useSearchForShipment from "../../hooks/useSearchForShipment";
import styles from "./SearchForShipmentAtHome.module.css";

const SearchForShipmentAtHome = () => {
  const {
    inputRef,
    fetchShipmentData,
    searchText,
    searchButton,
    trackingNumber,
  } = useSearchForShipment();

  return (
    <div className={styles.container}>
      <div className={styles.searchForShipment}>
        <h1>{searchText}</h1>
        <input
          ref={inputRef}
          className={styles.input}
          type="text"
          placeholder={trackingNumber}
        />
        <button onClick={() => fetchShipmentData()} className={styles.button}>
          {searchButton}
        </button>
      </div>
    </div>
  );
};

export default SearchForShipmentAtHome;
