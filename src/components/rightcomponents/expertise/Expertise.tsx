import ExpertiseBox from "./ExpertiseBox";
import styles from "./Expertise.module.css";

interface Props {
  skills: string[];
  interests: string[];
  expertiseTitles: [string, string];
}

function Expertise({ expertiseTitles, skills, interests }: Props) {
  return (
    <div id="Expertise" className={styles["expertise"]}>
      <div className={styles["expertise_inner"]}>
        <div className={styles["expertise_inner--left"]}>
          <div className={styles["expertise_inner--left_title"]}>
            <h3>{expertiseTitles[0]}</h3>
          </div>
          <ExpertiseBox expertises={skills} />
        </div>
        <div className={styles["expertise_inner--right"]}>
          <div className={styles["expertise_inner--right_title"]}>
            <h3>{expertiseTitles[1]}</h3>
          </div>
          <ExpertiseBox expertises={interests} />
        </div>
      </div>
    </div>
  );
}

export default Expertise;
