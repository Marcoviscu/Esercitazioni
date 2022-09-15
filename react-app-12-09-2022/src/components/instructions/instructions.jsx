import styles from "./index.module.scss";
import { useOutletContext } from "react-router-dom";

const Instructions = () => {
  const recipe = useOutletContext() ?? [];

  return (
    <div className={styles.Instruction}>
      <h2>Instruction</h2>
        <div className={styles.overlay} />
            <img className={styles.thumbnailSrc} src={recipe.thumbnailSrc} alt={recipe.image} />
            <div className={styles.maincontent}>
            <p className={styles.text}>{recipe.instructions}</p>
        </div>
    </div>
  );
}
export default Instructions;