import SkillLevelBar from "./SkillLevelBar";
import styles from "./ProgressBox.module.css";

interface Props {
  title: string[];
}

function ProgressBox({ title }: Props) {
  return (
    <div className={styles["progress-box"]}>
      <div className={styles["progress-box_inner"]}>
        <div className={styles["progress-box_inner--left"]}>
          <div className={styles["progress-box_inner_title"]}>
            <h3>{title[0]}</h3>
          </div>
          <div className={styles["progress-box_inner_bars"]}>
            <SkillLevelBar skillName="WordPress" skillPercentage={90} />
            <SkillLevelBar skillName="C++" skillPercentage={90} />
            <SkillLevelBar skillName="Java" skillPercentage={70} />
          </div>
        </div>
        <div className={styles["progress-box_inner--right"]}>
          <div className={styles["progress-box_inner_title"]}>
            <h3>{title[1]}</h3>
          </div>
          <div className={styles["progress-box_inner_bars"]}>
            <SkillLevelBar skillName="WordPress" skillPercentage={90} />
            <SkillLevelBar skillName="C++" skillPercentage={90} />
            <SkillLevelBar skillName="Java" skillPercentage={70} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProgressBox;
