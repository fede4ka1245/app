import React from 'react';
import { Grid, Typography } from '@mui/material';
import styles from './SecondCard.module.scss';

const SecondCard = () => {
  return (
    <Grid container p={1} width={'163px'} className={styles.main} justifyContent={'center'} rowSpacing={1} pb={2}>
      <Grid item>
        <Typography color={'#37366B'} fontWeight={700} fontSize={'18px'} textAlign={'center'} fontFamily={'Playfair Display'}>
          30 дней
        </Typography>
      </Grid>
      <Grid item>
        <Typography color={'black'} fontWeight={400} fontSize={'12px'} textAlign={'center'} fontFamily={'Gilroy'}>
          Безграничный доступ на 7 дней
        </Typography>
      </Grid>
      <Grid item>
        <Typography color={'black'} fontWeight={400} fontSize={'12px'} textAlign={'center'} fontFamily={'Gilroy'}>
          Сохранение в личном кабинете
        </Typography>
      </Grid>
      <Grid item>
        <Typography color={'black'} fontWeight={400} fontSize={'12px'} textAlign={'center'} fontFamily={'Gilroy'}>
          Доступ к форуму
        </Typography>
      </Grid>
    </Grid>
  );
};

export default SecondCard;
