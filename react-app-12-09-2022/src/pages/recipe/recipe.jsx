import React from 'react';
import { useParams, Outlet, Link, NavLink } from 'react-router-dom';
import { ENDPOINTS } from '../../utils/api/endpoints';
import { useFetch } from '../../utils/api/use-fetch';
import styles from './index.module.scss';

const formatRecipe = (data) => {
  const initialRecipe = data.meals?.at(0) ?? {};

  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const name = initialRecipe[`strIngredient${i}`];
    const value = initialRecipe[`strMeasure${i}`];

    if (!name?.length) {
      continue;
    }

    ingredients.push({ name, value });
  } 

  

  return {
    name: initialRecipe.strMeal,
    id: initialRecipe.idMeal,
    youtubeUrl: initialRecipe.strYoutube,
    thumbnailSrc: initialRecipe.strMealThumb,
    tags: initialRecipe.strTags,
    instructions: initialRecipe.strInstructions,
    ingredients,
  };
};

export const Recipe = (props) => {
  const { tab } = props;
  const { categoryName, recipeName, id } = useParams();
  const { data, loading, error } = useFetch(`${ENDPOINTS.DETEAIL}?i=${id}`);
  const recipe = data?.meals?.at(0) ?? null;

  const tabs = [
    {label:'Ricetta', path: 'istruzioni' },
    {label:'Ingredienti', path: 'ingredienti' },
    {label:'YouTube', path: 'youtube' }
  ];

  if (!data) {
    return 'loading...';
  }

  return (
    <div className={styles.MainSection}>
      <Link to='' className={styles.Title}>
        {categoryName} - {recipeName}
      </Link>

      <ul className={styles.MainContent}>
        {tabs.map(({label, path}) => (
        <li key={path}>

          <NavLink to={path}>
            {label}
          </NavLink>
        </li>
        ))}
      </ul>

      <Outlet context={formatRecipe(data)} />

      
    </div>
  );
};

export default Recipe;