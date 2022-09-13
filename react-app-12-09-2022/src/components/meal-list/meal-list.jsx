import React from "react";
import { MealListItem } from "../meal-list-item";
import styles from './index.module.scss';


const MealList = (props) => {
  const { meals = [], categoryName = "" } = props;

  return (
    <section className={styles.MealList}>
      <ul className={styles.Ul}>
        {meals.map((meal) => (
          <MealListItem
            key={meal.idMeal}
            meal={meal}
            categoryName={categoryName}
          />
        ))}
      </ul>
    </section>
  );
};

export default MealList;