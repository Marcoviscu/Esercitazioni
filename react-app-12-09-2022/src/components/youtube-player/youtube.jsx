import React from 'react';
import { useOutletContext } from 'react-router-dom';

export const YouTubePlayer = (props) => {
  const recipe = useOutletContext();
  const { youtubeUrl } = recipe;


  return <div>Youtube url: "{youtubeUrl}"</div>;
};