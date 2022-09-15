import React from 'react';
import { useOutletContext } from 'react-router-dom';
import styles from './index.module.scss';

export const YouTubePlayer = (props) => {
  const recipe = useOutletContext();
  const { youtubeUrl } = recipe;
  const link = youtubeUrl?.replace?.('/watch?v=', '/embed/') ?? '';
  console.log(link)

  return (
    <div className={styles.Container}>
      <iframe src={link} frameBorder='0' allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreenallow="autoplay; encrypted-media" allowtransparency="true" className={styles.Iframe} height='400' width='560'/>
    </div>
  );
};