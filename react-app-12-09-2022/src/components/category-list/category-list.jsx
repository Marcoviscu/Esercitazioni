import React from 'react';
import {CategoryListItem} from '../category-list-item';
import styles from './index.module.scss';


export const CategoryList = (props) => {
  const { categories = [] } = props;

  return (
    <section className={styles.CategoryList}>
      <ul className={styles.Ul}>
        {categories.map((category) => (
          <CategoryListItem key={category.idCategory} category={category} />
        ))}
      </ul>
    </section>
  );
};