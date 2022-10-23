import React, { useEffect } from 'react';
import { Backdrop } from '@mui/material';
import Loader from '../loader/Loader';
// @ts-ignore
import { disablePageScroll, enablePageScroll } from 'scroll-lock';

interface AppLoaderProps {
  isLoading?: boolean,
}

const AppLoader = ({ isLoading }: AppLoaderProps) => {
  useEffect(() => {
    if (isLoading) {
      disablePageScroll();
    } else {
      enablePageScroll();
    }
  }, [isLoading]);

  return (
    <Backdrop open={!!isLoading} sx={{ zIndex: 20 }}>
      <div style={{ height: '100px', width: '100px', background: '#261c5b', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '20px' }}>
        <Loader />
      </div>
    </Backdrop>
  );
};

export default AppLoader;
