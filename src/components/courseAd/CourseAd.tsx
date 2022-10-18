import React from 'react';
import background from './assets/background.png';
import styles from './CourseAdd.module.scss';
import { Grid, Typography } from '@mui/material';
import Slider from './components/Slider';

interface CourseAdProps {
  isPriceShowed?: boolean,
}

const CourseAd = ({ isPriceShowed }: CourseAdProps) => {
  const marks = [{ value: 0 }, { value: 33 }, { value: 66 }, { value: 100 }];

  return (
    <div style={{ paddingRight: '1px' }}>
      <div className={styles.main}>
        <img width={'100%'} src={background} className={styles.image}/>
        <div className={styles.timeHint}>
          Скоро
        </div>
        <Grid container pl={2} mt={'auto'} direction={'column'} zIndex={2}>
          <Grid item>
            <Typography fontFamily={'Playfair Display'} fontWeight={700} fontSize={'18px'} color={'white'}>
              Наименование нового курса
            </Typography>
          </Grid>
          <Grid item>
            <Typography fontFamily={'Gilroy'} fontWeight={400} fontSize={'12px'} color={'white'}>
              Дата старта 00.00.0000
            </Typography>
          </Grid>
          <Grid item pt={1} pb={1}>
            <svg width="97" height="6" viewBox="0 0 97 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle opacity="0.9" cx="3" cy="3" r="3" fill="white"/>
              <rect x="12" width="25" height="6" rx="3" fill="white"/>
              <circle opacity="0.68" cx="46" cy="3" r="3" fill="white"/>
              <circle opacity="0.55" cx="58" cy="3" r="3" fill="white"/>
              <circle opacity="0.45" cx="70" cy="3" r="3" fill="white"/>
              <circle opacity="0.35" cx="82" cy="3" r="3" fill="white"/>
              <circle opacity="0.2" cx="94" cy="3" r="3" fill="#72978F"/>
            </svg>
          </Grid>
        </Grid>
      </div>
      <Slider
        marks={marks}
        valueLabelDisplay="on"
        value={66}
        valueLabelFormat={() => '3 дня'}
      />
      {isPriceShowed &&
        <>
          <Grid container>
            <Grid pr={'5px'} item color={'#000000'} fontWeight={600} fontSize={'18px'} fontFamily={'Gilroy'}>
              19₽
            </Grid>
            <Grid item sx={{ textDecorationLine: 'line-through' }} color={'rgba(0, 0, 0, 0.3)'} fontWeight={600} fontSize={'18px'} fontFamily={'Gilroy'}>
              20₽
            </Grid>
          </Grid>
          <Grid pt={'5px'} item color={'#000000'} fontWeight={600} fontSize={'14px'} fontFamily={'Gilroy'}>
            до 00.00.00
          </Grid>
          <Grid pt={'5px'} item color={'#59ABDA'} fontWeight={400} fontSize={'14px'} fontFamily={'Gilroy'}>
            Подробнее
          </Grid>
        </>
      }
    </div>
  );
};

export default CourseAd;
