import React, { useEffect } from 'react';
import styles from './TabBar.module.scss';
import { Grid } from '@mui/material';
import home from './images/home.svg';
import add from './images/add.svg';
import list from './images/list.svg';
import messenger from './images/messenger.svg';
import astrologicalProcessor from './images/astrologicalProcessor.svg';

const TabBar = () => {
  useEffect(() => {
    document.body.style.paddingBottom = '75px';

    return () => {
      document.body.style.paddingBottom = '0px';
    };
  }, []);

  return (
    <div className={styles.tabBar}>
      <Grid
        container
        direction={'row'}
        height={'100%'}
        width={'100%'}
        justifyContent={'space-around'}
        alignItems={'center'}
      >
        <Grid item>
          <img src={home} alt='home'/>
        </Grid>
        <Grid item>
          <img src={astrologicalProcessor} alt='astrologicalProcessor'/>
        </Grid>
        <Grid item>
          <img src={add} alt='add'/>
        </Grid>
        <Grid item>
          <img src={list} alt='list'/>
        </Grid>
        <Grid item>
          <img src={messenger} alt='messenger'/>
        </Grid>
      </Grid>
    </div>
  );
};

export default TabBar;
