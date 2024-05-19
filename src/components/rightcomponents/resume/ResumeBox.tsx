import { ResumeType } from "../../Types";
import styles from "./ResumeBox.module.css";
import ResumeListItems from "./ResumeListItems";

interface Props {
  resumes: ResumeType[];
}

function ResumeBox({ resumes }: Props) {
  return (
    <div className={styles["resume-box"]}>
      <div className={styles["resume-box_inner"]}>
        <ResumeListItems resumes={resumes} />
      </div>
    </div>
  );
}

export default ResumeBox;
