import ProgressBox from "./ProgressBox";
import styles from "./Qualifications.module.css";

function Qualifications() {
  return (
    <div id="Qualifications" className={styles["qualifications"]}>
      <ProgressBox title={["Programming Skills", "Language Skills"]} />
    </div>
  );
}

export default Qualifications;
