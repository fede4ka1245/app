import React, { useEffect, useRef } from 'react';
import { Grid, Typography } from '@mui/material';
import styles from '../../pages/menu/Menu.module.scss';
import { TransparentButtonProps } from './TransparentButtonProps';

const TransparentButton = ({ image, label, onClick, isSquare, height } : TransparentButtonProps) => {
  const transparentButtonRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (height && transparentButtonRef.current) {
      transparentButtonRef.current.style.height = height;
    }

    if (!isSquare) {
      return;
    }

    const resize = () => {
      if (transparentButtonRef.current !== null) {
        transparentButtonRef.current.style.height = `${transparentButtonRef.current.clientWidth}px`;
      }
    };

    resize();
    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <>
      <section ref={transparentButtonRef} className={styles.transparentButton} onClick={() => onClick()}>
        <Grid
          container
          display={'flex'}
          justifyContent={'center'}
          direction={'column'}
          alignItems={'center'}
          rowSpacing={2}
          width={'100%'}
          height={'100%'}
        >
          <Grid item>
            <>
              { image }
            </>
          </Grid>
          <Grid item>
            <Typography color={'white'} fontWeight={'bold'} fontFamily={'Gilroy'} fontSize={18}>
              { label }
            </Typography>
          </Grid>
        </Grid>
      </section>
    </>
  );
};

export default TransparentButton;
