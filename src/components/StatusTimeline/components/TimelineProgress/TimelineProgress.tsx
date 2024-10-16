import styles from "./TimelineProgress.module.css";
import useTimelineProgress from "./useTimelineProgress";

const TimelineProgress = () => {
  const { steps, currentColor, progress, dir } = useTimelineProgress();
  return (
    <div className={styles.progressBar}>
      {steps
        .sort((a, b) => (a.step > b.step ? a.step : b.step))
        .map((item) => (
          <div
            className={`${styles.rounded} ${styles[item.color]} ${
              styles[item.parentStyle]
            } ${styles[dir]}`}
          >
            <img
              className={styles[item.style]}
              src={item.icon}
              alt={item.step.toString()}
            />
          </div>
        ))}
      <div
        className={`${styles.progress} ${styles[currentColor]} ${styles[progress]}`}
      ></div>
    </div>
  );
};

export default TimelineProgress;
