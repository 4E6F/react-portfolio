import ProgressBar from "react-bootstrap/ProgressBar";
import styles from "./SkillLevelBar.module.css";

interface Props {
  skillName: string;
  skillPercentage: number;
}

function SkillLevelBar({ skillName, skillPercentage }: Props) {
  return (
    <div className={styles["progress-bar_container"]}>
      <div className={styles["progress-bar_description"]}>
        <span className={styles["progress-bar_label"]}>{skillName}</span>
        <span className={styles["progress-bar_percentage"]}>
          {skillPercentage + "%"}
        </span>
      </div>
      <ProgressBar now={skillPercentage} />
    </div>
  );
}

export default SkillLevelBar;
