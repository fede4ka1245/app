import React, { useMemo } from 'react';
import styles from './RateCard.module.scss';
import { Grid, Typography } from '@mui/material';

export interface RateCardProps {
  price?: number,
  timeValue?: number,
  timeUnit?: string,
  lineWidth?: string,
  background?: string
}

const RateCard = ({ price, timeValue, timeUnit, lineWidth, background }: RateCardProps) => {
  const { float, total } = useMemo(() => {
    const [total, float] = String(price?.toFixed(2)).split('.');

    return { total, float };
  }, [price]);

  return (
    <section className={styles.main}>
      <Grid position={'relative'} width={'100%'} height={'100%'} container direction={'column'} p={2} justifyContent={'space-between'}>
        <section className={styles.lines} style={{ width: lineWidth || '30%' }}>
          <div className={styles.line1}/>
          <div className={styles.line2}/>
          <div className={styles.line3}/>
          <div className={styles.line4}/>
        </section>
        <div style={{ zIndex: -1, top: 0, left: 0, width: '100%', height: '100%', position: 'absolute', background }} />
        <Grid item container justifyContent={'space-between'}>
          <Grid item display={'flex'} alignItems={'flex-end'} position={'relative'}>
            <Typography display={'inline'} lineHeight={'40px'} fontSize={'36px'} color={'white'} fontWeight={700}>
              {timeValue}<Typography display={'inline'} fontSize={'18px'} color={'white'} fontWeight={700}>{timeUnit}</Typography>
            </Typography>
            <Typography className={styles.sale} fontSize={'14px'} color={'white'} fontWeight={400}>
              + 2 мес
            </Typography>
          </Grid>
          <Grid item>
            <Typography fontSize={'16px'} color={'white'} fontWeight={400}>
              Неограниченнй доступ
              <br/>+ 2 месяца в подарок
            </Typography>
          </Grid>
        </Grid>
        <Grid item container justifyContent={'space-between'} alignItems={'center'}>
          <Grid item>
            <Typography fontSize={'26px'} fontWeight={400} color={'white'} display={'flex'} justifyContent={'flex-start'}>
              ${total}.<Typography display={'inline'} mb={'auto'}>{float}</Typography>
            </Typography>
          </Grid>
          <Grid item>
            <Typography sx={{ opacity: 0.7 }} color={'white'} fontWeight={400} fontSize={'16px'}>
              Подробнее
            </Typography>
          </Grid>
          <Grid item>
            <section className={styles.button}>
              Подключить
            </section>
          </Grid>
        </Grid>
      </Grid>
    </section>
  );
};

export default RateCard;
