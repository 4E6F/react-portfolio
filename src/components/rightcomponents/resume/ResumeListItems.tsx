import { ResumeType } from "../../Types";
import styles from "./ResumeListItems.module.css";

interface ResumeMap {
  resumes: ResumeType[];
}

function ResumeListItems({ resumes }: ResumeMap) {
  const resumeWithIDs = resumes.map((item) => {
    return { ...item, id: crypto.randomUUID() };
  });
  return (
    <div className={styles["resume-items"]}>
      <ul>
        {resumeWithIDs.map((item) => (
          <li key={item.id}>
            <ResumeItem time={item.time} place={item.place} what={item.what} />
          </li>
        ))}
      </ul>
    </div>
  );
}

const ResumeItem = ({ time, place, what }: ResumeType) => {
  return (
    <div className={styles["resume-items_inner"]}>
      <div className={styles["resume-items_inner_date"]}>
        <span>{time}</span>
      </div>
      <div className={styles["resume-items_inner_place"]}>
        <h3>{place}</h3>
        <span>{what}</span>
      </div>
    </div>
  );
};

export default ResumeListItems;
