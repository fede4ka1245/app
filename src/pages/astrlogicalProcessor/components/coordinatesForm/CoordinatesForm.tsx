import React from 'react';
import { Grid, Typography } from '@mui/material';
import Input from '../../../../components/input/Input';

const CoordinatesForm = () => {
  return (
    <Grid container direction={'column'}>
      <Grid item pb={1}>
        <Typography fontFamily={'Gilroy'} color={'white'} fontSize={'16px'} fontWeight={600}>
          Ввести координаты вручную
        </Typography>
      </Grid>
      <Grid item container direction={'row'} spacing={2} pb={2}>
        <Grid item xs={6} md={6}>
          <Input placeholder='Широта'/>
        </Grid>
        <Grid item xs={6} md={6}>
          <Input placeholder='Координаты'/>
        </Grid>
      </Grid>
      <Grid item container direction={'row'} spacing={2} pb={2}>
        <Grid item xs={6} md={6}>
          <Input placeholder='Долгота'/>
        </Grid>
        <Grid item xs={6} md={6}>
          <Input placeholder='Координаты'/>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CoordinatesForm;
