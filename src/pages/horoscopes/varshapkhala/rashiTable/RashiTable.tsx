import React from 'react';
import styles from './RashiTable.module.scss';
import { Grid, Typography } from '@mui/material';
import { useGetRashiTable } from '../../../../store/selectors';

const RashiTable = () => {
  const rashiTable = useGetRashiTable();

  return (
    <div className={styles.table}>
      <section style={{ height: '20px' }}>
        <Grid pl={2} className={styles.header}>
          Планета
        </Grid>
        <Grid className={styles.header}>
          Знаки
        </Grid>
        <Grid className={styles.header}>
          Градусы
        </Grid>
        <Grid className={styles.header}>
          Накшатра
        </Grid>
      </section>
      {rashiTable?.map((rashiItem: any, index) => (
        <section key={index}>
          <Grid display={'flex'} alignItems={'center'}>
            <Typography pl={2} className={styles.planet}>
              {rashiItem.planet.name}
            </Typography>
            {rashiItem.planet.isRetragraded && <Typography pl={1} className={styles.planetSign}>
              (R)
            </Typography>}
          </Grid>
          <Grid display={'flex'} alignItems={'center'}>
            <Typography className={styles.planet}>
              {rashiItem.rashiNavamshi.replace('\n', '').split('/').join('/')}
            </Typography>
          </Grid>
          <Grid display={'flex'} alignItems={'center'}>
            <Typography className={styles.degrees}>
              {rashiItem.cpuxuta.split('\n')[0]}
            </Typography>
          </Grid>
          <Grid display={'flex'} alignItems={'center'}>
            <Typography className={styles.planet}>
              {rashiItem.naksantra}
            </Typography>
          </Grid>
        </section>
      ))}
    </div>
  );
};

export default RashiTable;
