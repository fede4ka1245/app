import React from 'react';
import styles from './RashiTable.module.scss';
import { Grid, Typography } from '@mui/material';
import { useGetRashiTable } from '../../../../store/selectors';
import ZodiacSign from '../../../../components/zodiacSign/ZodiacSign';

const RashiTable = () => {
  const rashiTable = useGetRashiTable();

  return (
    <div className={styles.table}>
      <section style={{ height: '20px' }}>
        <Grid pl={2} className={styles.header}>
          Планета
        </Grid>
        <Grid className={styles.header} pl={2}>
          раши/навамша
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
            {rashiItem.planet.additionalInfo && <Typography pl={1} className={styles.planetAdditionalInfo}>
              {rashiItem.planet.additionalInfo}
            </Typography>}
            <Typography pl={1} className={styles.planet} fontFamily={'Gilroy'} fontSize={'12px'} color={'white'}>
              {rashiItem.planet.name}
            </Typography>
            {rashiItem.planet.isRetragraded && <Typography pl={1} className={styles.planetSign} fontFamily={'Gilroy'} fontSize={'12px'} color={'white'}>
              (R)
            </Typography>}
          </Grid>
          <Grid display={'flex'} alignItems={'center'}>
            <Typography fontSize={'18px'} color={'white'} fontWeight={700} fontFamily={'Gilroy'} pl={2}>
              <ZodiacSign zodiacSign={rashiItem.rashi} /> / <ZodiacSign zodiacSign={rashiItem.namavashi} />
            </Typography>
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
