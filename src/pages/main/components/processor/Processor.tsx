import React from 'react';
import styles from './Processor.module.scss';
import { Grid, Typography } from '@mui/material';
import planet from './assets/planet.png';
import chevron from './assets/chevron.svg';

const Processor = () => {
  return (
    <div className={styles.main}>
      <Grid p={2}>
        <Typography color={'#292E30'} fontFamily={'Playfair Display'} fontWeight={'bold'} fontSize={'24px'} pb={4}>
          Астропроцессор
        </Typography>
        <Typography color={'#292E30'} fontFamily={'Gilroy'} fontWeight={'bold'}>
          Запустить расчет
        </Typography>
        <Typography color={'#292E30'} fontFamily={'Gilroy'} fontWeight={400} fontSize={'10px'} pt={1}>
          Имеются все необходимые инструменты
          <br/>
          как для новичков, так и для профессионалов.
        </Typography>
      </Grid>
      <img src={planet} className={styles.planet}/>
      <img src={chevron} className={styles.chevron}/>
    </div>
  );
};

export default Processor;
