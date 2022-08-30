import React from 'react';
import ok from './assets/ok.svg';
import { Grid, Typography } from '@mui/material';
import { ButtonSaveProps } from './ButtonSaveProps';

const ButtonSave = ({ onClick } : ButtonSaveProps) => {
  return (
    <div onClick={onClick}>
      <Grid container>
        <Grid item pr={'5px'}>
          <img alt='ok' src={ok}/>
        </Grid>
        <Grid item>
          <Typography fontSize={'14px'} fontWeight={'bold'} fontFamily={'Gilroy'} color={'white'}>
            Сохранить
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default ButtonSave;
