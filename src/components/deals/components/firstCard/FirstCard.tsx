import React from 'react';
import { Grid, Typography } from '@mui/material';
import styles from '../../Deals.module.scss';

const FirstCard = () => {
  return (
    <Grid container direction={'column'} width={'170px'}>
      <Grid item container direction={'column'} className={styles.card} pl={2} pr={2}>
        <Grid item>
          <Typography fontFamily={'Playfair Display'} fontWeight={700} fontSize={'34px'} color={'#37366B'}>
            7 Дней
          </Typography>
        </Grid>
        <Grid item pt={2}>
          <Typography fontFamily={'Gilroy'} fontWeight={400} fontSize={'12px'}>
            Безграничный доступ на 7 дней + 1 беслатно
          </Typography>
        </Grid>
        <Grid item pt={2}>
          <Typography fontFamily={'Gilroy'} fontWeight={400} fontSize={'12px'}>
            Сохранение в личном кабинете
          </Typography>
        </Grid>
        <Grid item pt={2}>
          <Typography fontFamily={'Gilroy'} fontWeight={400} fontSize={'12px'}>
            Доступ к форуму
          </Typography>
        </Grid>
        <Grid item pt={2}>
          <Typography fontFamily={'Gilroy'} fontWeight={400} fontSize={'12px'} className={styles.freeDays}>
            1 день бесплатно
          </Typography>
        </Grid>
      </Grid>
      <Grid item pt={2}>
        <section className={styles.button}>
          <Typography fontFamily={'Gilroy'} fontWeight={400} fontSize={'14px'} color={'white'}>
            Подключить
          </Typography>
        </section>
      </Grid>
    </Grid>
  );
};

export default FirstCard;
