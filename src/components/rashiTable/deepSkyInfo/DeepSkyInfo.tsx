import React from 'react';
import styles from './Info.module.scss';
import background from './assets/img.png';
import galaxy from './assets/img_2.png';
import { Grid, Typography } from '@mui/material';
import { CurrentDeepSkyObject } from '../../../models/types/CurrentDeepSkyObject';
import ZodiacSign from '../../zodiacSign/ZodiacSign';

interface DeepSkyInfoProps {
  deepSkyObject: CurrentDeepSkyObject,
  planet: string
}

const DeepSkyInfo = ({ deepSkyObject, planet }: DeepSkyInfoProps) => {
  return (
    <div className={styles.main}>
      <img width={'100%'} height={'100%'} src={background} className={styles.image}/>
      <Grid container p={3} direction={'column'}>
        <Grid item pb={2}>
          <Typography fontFamily={'Gilroy'} fontWeight={700} color={'white'} fontSize={'18px'}>
            {planet} соединяеться с Deep Sky объектом
          </Typography>
        </Grid>
        <Grid item container direction={'row'} display={'flex'}>
          <Grid item>
            <img src={galaxy} width={'100px'} height={'100px'} />
          </Grid>
          <Grid container item direction={'column'} flex={1} pl={3}>
            <Grid item>
              <Typography fontFamily={'Gilroy'} fontWeight={700} color={'white'} fontSize={'16px'}>
                {deepSkyObject.title}
              </Typography>
            </Grid>
            <Grid item container pt={2}>
              <Grid container item direction={'column'} width={'50%'}>
                <Grid item>
                  <Typography fontFamily={'Gilroy'} fontWeight={700} color={'white'} fontSize={'10px'}>
                    Сидерический
                  </Typography>
                </Grid>
                <Grid item display={'flex'} pt={1}>
                  {deepSkyObject?.year?.siderealSign && <ZodiacSign zodiacSign={deepSkyObject.year.siderealSign} />}
                  <Typography fontFamily={'Gilroy'} fontWeight={700} color={'white'} fontSize={'18px'} pl={1}>
                    {deepSkyObject?.year?.siderealSigndegree}° {deepSkyObject?.year?.siderealMinutes}’
                  </Typography>
                </Grid>
              </Grid>
              <Grid container item direction={'column'} width={'50%'}>
                <Grid item>
                  <Typography fontFamily={'Gilroy'} fontWeight={700} color={'white'} fontSize={'10px'}>
                    Тропический
                  </Typography>
                </Grid>
                <Grid item display={'flex'} pt={1}>
                  {deepSkyObject?.year?.tropicalSign && <ZodiacSign zodiacSign={deepSkyObject?.year?.tropicalSign} />}
                  <Typography fontFamily={'Gilroy'} fontWeight={700} color={'white'} fontSize={'18px'} pl={1}>
                    {deepSkyObject?.year?.tropicalSigndegree}° {deepSkyObject?.year?.tropicalMinutes}’
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item pt={2}>
          <Typography fontFamily={'Gilroy'} fontWeight={400} color={'white'} fontSize={'11px'}>
            {deepSkyObject.comment}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default DeepSkyInfo;
