import { ResumeType } from "../../Types";
import styles from "./Resume.module.css";
import ResumeBox from "./ResumeBox";

interface Props {
  resumeTitles: [string, string];
  resumes: ResumeType[][];
}

function Resume({ resumeTitles, resumes }: Props) {
  return (
    <div id="Resume" className={styles["resume"]}>
      <div className={styles["resume_inner"]}>
        <div className={styles["resume_inner--left"]}>
          <div className={styles["resume_inner--left_title"]}>
            <h3>{resumeTitles[0]}</h3>
          </div>
          <ResumeBox resumes={resumes[0]} />
        </div>
        <div className={styles["resume_inner--right"]}>
          <div className={styles["resume_inner--right_title"]}>
            <h3>{resumeTitles[1]}</h3>
          </div>
          <ResumeBox resumes={resumes[1]} />
        </div>
      </div>
    </div>
  );
}

export default Resume;
