import React from 'react';
import styles from './RashiTable.module.scss';
import { Grid, Typography } from '@mui/material';
import { useGetRashiTable } from '../../../../store/selectors';
import ZodiacSign from '../../../../components/zodiacSign/ZodiacSign';
import { RashiTableRow } from '../../../../models/types/RashiTableRow';

const RashiTable = () => {
  const rashiTable = useGetRashiTable();

  return (
    <div className={styles.table}>
      <section style={{ height: '20px' }}>
        <Grid pl={2} className={styles.header}>
          Планета
        </Grid>
        <Grid className={styles.header}>
          Знак
        </Grid>
        <Grid className={styles.header}>
          Градусы
        </Grid>
        <Grid className={styles.header}>
          Накшатра
        </Grid>
      </section>
      {rashiTable?.map((rashiItem: RashiTableRow, index) => (
        <section key={index}>
          <Grid display={'flex'} alignItems={'center'}>
            {rashiItem.planet.additionalInfo && <Grid pl={1} className={styles.planetAdditionalInfo}>
              {rashiItem.planet.additionalInfo}
            </Grid>}
            <Grid pl={1} className={styles.planet} fontFamily={'Gilroy'} fontSize={'12px'} color={'white'}>
              {rashiItem.planet.name}
            </Grid>
            {rashiItem.planet.isRetragraded && <Grid pl={1} className={styles.planetSign} fontFamily={'Gilroy'} fontSize={'12px'} color={'white'}>
              (R)
            </Grid>}
          </Grid>
          <Grid display={'flex'} alignItems={'center'}>
            <ZodiacSign zodiacSign={rashiItem.sign} />
          </Grid>
          <Grid display={'flex'} alignItems={'center'}>
            <Typography className={styles.degrees} fontWeight={'bold'} fontFamily={'Gilroy'} fontSize={'12px'} color={'white'}>
              {rashiItem.sphuta}
            </Typography>
          </Grid>
          <Grid display={'flex'} alignItems={'center'}>
            <Typography fontFamily={'Gilroy'} fontSize={'12px'} color={'white'}>
              {rashiItem.naksantra.mainInfo} {rashiItem.naksantra.additionalInfo}
            </Typography>
          </Grid>
        </section>
      ))}
    </div>
  );
};

export default RashiTable;
