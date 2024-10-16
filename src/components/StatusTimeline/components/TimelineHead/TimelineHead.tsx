import styles from "./TimelineHead.module.css";
import useTimelineHead from "./useTimelineHead";

const TimelineHead = () => {
  const {
    shipmentId,
    lastEdit,
    merchant,
    arrival,
    shipmentIdValue,
    lastEditValue,
    merchantValue,
    arrivalValue,
    currentColor,
  } = useTimelineHead();

  return (
    <div className={styles.timelineHead}>
      <div className={styles.shipmentIdAndStatus}>
        <p className={styles.shipmentId}>{shipmentId}</p>
        <p className={`${styles.shipmentStatus} ${styles[currentColor]}`}>
          {shipmentIdValue}
        </p>
      </div>
      <div></div>
      <div className={styles.lastEdit}>
        <p className={styles.lastEditText}>{lastEdit}</p>
        <p className={styles.lastEditDate}>{lastEditValue}</p>
      </div>
      <div></div>
      <div className={styles.merchant}>
        <p className={styles.merchantText}>{merchant}</p>
        <p className={styles.merchantName}>{merchantValue}</p>
      </div>
      <div></div>
      <div className={styles.arrival}>
        <p className={styles.arrivalText}>{arrival}</p>
        <p className={styles.arrivalDate}>{arrivalValue}</p>
      </div>
    </div>
  );
};

export default TimelineHead;
