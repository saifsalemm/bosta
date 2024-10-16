import TimelineComments from "./components/TimelineComments/TimelineComments";
import TimelineHead from "./components/TimelineHead/TimelineHead";
import TimelineProgress from "./components/TimelineProgress/TimelineProgress";
import styles from "./StatusTimeline.module.css";

const StatusTimeline = () => {
  return (
    <div className={styles.container}>
      <TimelineHead />
      <TimelineProgress />
      <TimelineComments />
    </div>
  );
};

export default StatusTimeline;
