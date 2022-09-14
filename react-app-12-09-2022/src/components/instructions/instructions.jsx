import React from 'react';
import { useOutletContext } from 'react-router-dom';
import styles from './index.module.scss';


export function Instructions() {
   const { instruction, thumbnailSrc }  = useOutletContext() ?? [];

    return   (
        <div className={styles.container}>
            <img className={styles.img} src={thumbnailSrc} alt='image' />
            <p className={styles.content}>{instruction}</p>
        </div>
       

    )
    

}

export default Instructions;