import React from 'react';
import styles from './Deals.module.scss';
import { ClickAwayListener, Grid } from '@mui/material';
import FirstCard from './components/firstCard/FirstCard';
import SecondCard from './components/secondCard/SecondCard';

const Deals = ({ close }: any) => {
  return (
    <section className={styles.background}>
      <ClickAwayListener onClickAway={close}>
        <Grid container item justifyContent={'center'} alignItems={'center'}>
          <Grid item pr={1}>
            <FirstCard />
          </Grid>
          <Grid item pb={5}>
            <SecondCard />
          </Grid>
        </Grid>
      </ClickAwayListener>
    </section>
  );
};

export default Deals;
