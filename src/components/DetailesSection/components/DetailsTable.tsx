import styles from "../DetailesSection.module.css";
import useDetailsTable from "../hooks/useDetailsTable";

const DetailsTable = () => {
  const { shipmentDetails, branch, date, time, details, tableRows } =
    useDetailsTable();

  return (
    <section className={styles.detailesTable}>
      <p className={styles.detailTitle}>{shipmentDetails}</p>
      <table>
        <tr className={`${styles.tr} ${styles.thead}`}>
          <th>{branch}</th>
          <th>{date}</th>
          <th>{time}</th>
          <th>{details}</th>
        </tr>
        {tableRows.map((item) => (
          <tr className={`${styles.tr} ${styles.tbody}`}>
            <td>{item.hub ?? "-"}</td>
            <td>{item.date}</td>
            <td>{item.time}</td>
            <td>{item.state}</td>
          </tr>
        ))}
      </table>
    </section>
  );
};

export default DetailsTable;
