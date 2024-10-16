import AddressAndContactUs from "./components/AddressAndContactUs";
import DetailsTable from "./components/DetailsTable";
import styles from "./DetailesSection.module.css";

const DetailesSection = () => {
  return (
    <div className={styles.detailesSection}>
      <DetailsTable />
      <AddressAndContactUs />
    </div>
  );
};

export default DetailesSection;
