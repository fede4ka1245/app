import React from 'react';
import { Grid, Typography } from '@mui/material';
import Input from '../../../components/input/Input';
import TransitionItem from './components/transitionItem/TransitionItem';
import Button from '../../../components/button/Button';
import { ButtonType } from '../../../components/button/ButtonProps';

const Transitions = () => {
  return (
    <Grid container direction={'column'} pl={4} pr={4} pt={2}>
      <Grid item>
        <Typography font-family={'Gilroy'} fontStyle={'normal'} fontWeight={600} color={'white'}>
          Дата транзита
        </Typography>
      </Grid>
      <Grid item pt={2}>
        <Input placeholder={'00.00.00'}/>
      </Grid>
      <Grid item>
        <TransitionItem />
      </Grid>
      <Grid item>
        <TransitionItem />
      </Grid>
      <Grid pt={3} pb={2}>
        <Button type={ButtonType.gradient} text={'Расчитать'}/>
      </Grid>
    </Grid>
  );
};

export default Transitions;
