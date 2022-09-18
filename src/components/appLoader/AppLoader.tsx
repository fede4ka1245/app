import React from 'react';
import { Box } from '@mui/material';
import Loader from '../loader/Loader';

const AppLoader = () => {
  return (
    <Box position={'fixed'} top={'calc(50% - 50px)'} left={'calc(50% - 50px)'} zIndex={10}>
      <div style={{ height: '100px', width: '100px', background: '#261c5b', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '20px' }}>
        <Loader />
      </div>
    </Box>
  );
};

export default AppLoader;
