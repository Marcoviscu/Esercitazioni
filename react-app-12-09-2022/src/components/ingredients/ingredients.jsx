import React from 'react';
import { useOutletContext } from 'react-router-dom';
import styles from './index.module.scss';


const Ingredients = () => {
    const recipe = useOutletContext();
    const { ingredients } = recipe;


    return   (
        // <div><button onClick={() => console.log(recipe)}></button></div>
    <div className={styles.container}>
        <ul className={styles.Ul}>
             {ingredients?.map((ingredients, i) => (
                 <li key={i}>
                    {ingredients.name} - {ingredients.value}
                </li>
             ))}    
        </ul>
    </div>
    )
    

}

export default Ingredients;