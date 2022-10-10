import React from 'react';
import map from './assets/map.svg';
import AspectRatio from '@mui/joy/AspectRatio';

const Map = () => {
  return (
    <AspectRatio ratio={1}>
      <img src={map}/>
    </AspectRatio>
  );
};

export default Map;
