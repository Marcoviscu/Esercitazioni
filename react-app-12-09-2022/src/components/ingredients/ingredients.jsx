import React from 'react';
import { useOutletContext } from 'react-router-dom';
import styles from './index.module.scss';


export function Ingredients() {
    const { ingredients } = useOutletContext() ?? [];

    return   (
    <div className={styles.container}>
        <ul className={styles.Ul}>
             {ingredients?.map((el, i) => (
                 <li key={i}>
                    {el.name} - {el.value}
                </li>
             ))}    
        </ul>
    </div>

    )
    

}

export default Ingredients