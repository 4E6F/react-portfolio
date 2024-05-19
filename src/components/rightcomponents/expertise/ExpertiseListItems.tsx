import styles from "./ExpertiseListItems.module.css";

interface Props {
  expertises: string[];
}

function ExpertiseListItems({ expertises }: Props) {
  const expertiseWithIDs = expertises.map((item) => {
    return { item, id: crypto.randomUUID() };
  });
  return (
    <div className={styles["expertise-items"]}>
      <ul>
        {expertiseWithIDs.map((expertise) => {
          return (
            <li key={expertise.id}>
              <span>{expertise.item}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ExpertiseListItems;
