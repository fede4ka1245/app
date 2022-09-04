import React from 'react';
import YearPicker from '../../../components/yearPicker/YearPicker';
import { Grid } from '@mui/material';
import Button from '../../../components/button/Button';
import planet from './img.png';

const Varshapkhala = () => {
  return (
    <Grid container direction={'column'} position='relative'>
      <img
        src={planet}
        height={'582px'}
        width={'100%'}
        style={{ objectFit: 'cover', position: 'absolute', opacity: 0.5, zIndex: -1, overflowY: 'visible', top: '-250px' }}
      />
      <Grid item pt={'30px'} pb={'30px'}>
        <YearPicker />
      </Grid>
      <Grid pr={'30px'} pl={'30px'}>
        <Button text={'Построить гороскоп'}/>
      </Grid>
    </Grid>
  );
};

export default Varshapkhala;
