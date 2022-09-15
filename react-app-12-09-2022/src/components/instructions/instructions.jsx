import styles from "./index.module.scss";
import { useOutletContext } from "react-router-dom";

const Instructions = () => {
  const recipe = useOutletContext() ?? [];

  return (
      <div className={styles.Instruction}>
        <h2>Instruction</h2>
        <img className={styles.thumbnailSrc} src={recipe.thumbnailSrc} alt={recipe.image} />
        <div className={styles.overlay} />    
            <p className={styles.text}>{recipe.instructions}</p>
      </div>
  );
}
export default Instructions;