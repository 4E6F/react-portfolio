import ExpertiseListItems from "./ExpertiseListItems";
import styles from "./ExpertiseBox.module.css";

interface Props {
  expertises: string[];
}

function ExpertiseBox({ expertises }: Props) {
  return (
    <div className={styles["expertise-box"]}>
      <div className={styles["expertise-box_inner"]}>
        <ExpertiseListItems expertises={expertises} />
      </div>
    </div>
  );
}

export default ExpertiseBox;
