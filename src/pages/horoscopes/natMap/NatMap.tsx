import React from 'react';
import styles from './NatMap.module.scss';
import img from './img.png';
import Switch from '../../../components/switch/Switch';
import { Grid, Typography } from '@mui/material';
import deepSky from './deepSky.svg';
import sign from './sign.svg';
import Table from '../../../components/table/Table';

const NatMap = () => {
  return (
    <>
      <Grid container pl={4} pr={4} direction={'column'}>
        <Grid item>
          <section className={styles.main} style={{ background: `url("${img}")` }}>
            <img alt='deepSky' src={deepSky} style={{ margin: '0 auto 0 10px' }} />
            <Switch />
          </section>
        </Grid>
      </Grid>
      <Table />
    </>
  );
};

export default NatMap;
