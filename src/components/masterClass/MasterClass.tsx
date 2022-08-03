import React from 'react';
import styles from './MasterClassForm.module.scss';
import { Grid } from '@mui/material';
import Video from '../video/Video';

const MasterClass = () => {
  return (
    <div className={styles.main}>
      <Grid container columnSpacing={2} p={1} direction={'row'}>
        <Grid item>
          <div
            style={{
              background: 'gray',
              width: '145px',
              height: '100%',
              borderRadius: '10px'
            }}
          >
            <Video />
          </div>
        </Grid>
        <Grid flex={1} item direction={'column'} paddingTop={2} paddingBottom={2} container rowSpacing={1}>
          <Grid item>
            <div className={styles.header}>
              Прогнозы на политику
            </div>
          </Grid>
          <Grid item>
            <section className={styles.date}>
              12 сентября
            </section>
          </Grid>
          <Grid item>
            <div style={{ fontFamily: 'arial' }}>
              В рамках мастер-класса вы получите новые знания по теме прогнозов на политические события.
            </div>
          </Grid>
          <Grid item>
            <div style={{ fontFamily: 'arial' }}>
              Ведущий:
            </div>
            <div className={styles.header}>
              Aнна приходько
            </div>
          </Grid>
          <Grid item>
            <section className={styles.join}>
              участвовать
            </section>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default MasterClass;
