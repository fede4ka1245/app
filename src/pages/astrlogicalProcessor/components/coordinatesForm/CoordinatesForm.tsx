import React from 'react';
import { Grid, Typography } from '@mui/material';
import Input from '../../../../components/input/Input';

const CoordinatesForm = () => {
  return (
    <Grid container direction={'column'} width={'100%'}>
      <Grid item pb={2}>
        <Typography fontFamily={'Gilroy'} color={'white'} fontSize={'16px'} fontWeight={600}>
          Ввести координаты вручную
        </Typography>
      </Grid>
      <Grid item container display={'flex'} pb={2}>
        <Grid item flex={1}>
          <Input placeholder='Широта'/>
        </Grid>
        <Grid item flex={1} pl={2}>
          <Input placeholder='Долгота'/>
        </Grid>
      </Grid>
      <Grid item container direction={'row'} width={'calc(50% - 8px)'} justifyContent={'space-between'}>
        <Input placeholder={'Час. пояс'} isSelect={true}/>
      </Grid>
    </Grid>
  );
};

export default CoordinatesForm;
