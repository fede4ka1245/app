import React from 'react';
import { Grid, Typography } from '@mui/material';
import styles from '../../pages/menu/Menu.module.scss';
import { TransparentButtonProps } from './TransparentButtonProps';

const TransparentButton = ({ image, label, onClick } : TransparentButtonProps) => {
  return (
    <>
      <section className={styles.transparentButton} onClick={() => onClick()}>
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
