import React from 'react';
import map from './assets/map.svg';

const Map = () => {
  return (
    <>
      <img src={map} width={'100%'} height={'100%'} style={{ maxHeight: '350px', maxWidth: '350px' }} />
    </>
  );
};

export default Map;
