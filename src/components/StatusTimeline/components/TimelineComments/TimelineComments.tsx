import styles from "./TimelineComments.module.css";
import useTimelineComments from "./useTimelineComments";

const TimelineComments = () => {
  const { steps, currentColor, dir } = useTimelineComments();

  return (
    <div className={styles.timelineComments}>
      {steps.map((item) => (
        <div className={`${styles.commentsWrapper} ${styles[dir]}`}>
          <p className={styles.commentText}>{item.text}</p>
          {!!item.comment && (
            <p
              className={`${styles.commentText} ${styles.commentNote} ${styles[currentColor]}`}
            >
              {item.comment}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

export default TimelineComments;
