import React from 'react';
import styles from './Bhava.module.scss';
import { Grid, Typography } from '@mui/material';
import ZodiacSign from '../../../../../components/zodiacSign/ZodiacSign';
import { useGetBhava } from '../../../../../store/selectors';

const Bhava = () => {
  const bhava = useGetBhava();

  return (
    <div className={styles.table}>
      <section>
        <Grid pl={2} className={styles.header}>
          Планета
        </Grid>
        <Grid className={styles.header}>
          Знак
        </Grid>
        <Grid className={styles.header}>
          Градусы
        </Grid>
      </section>
      {bhava?.map((bhavaItem, index) => (
        <section key={index}>
          <Grid display={'flex'} alignItems={'center'}>
            <Typography pl={2} className={styles.planet}>
              {bhavaItem.planet.name}
            </Typography>
            {bhavaItem.planet.isRetragraded && <Typography pl={1} className={styles.planetSign}>
              (R)
            </Typography>}
          </Grid>
          <Grid display={'flex'} alignItems={'center'}>
            <ZodiacSign zodiacSign={bhavaItem.sign} />
          </Grid>
          <Grid display={'flex'} alignItems={'center'}>
            <Typography className={styles.degrees}>
              {bhavaItem.degrees.join(' ')}
            </Typography>
          </Grid>
        </section>
      ))}
    </div>
  );
};

export default Bhava;
