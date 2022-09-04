import React from 'react';
import map from './map.svg';
import { Grid, Typography } from '@mui/material';

const Ashtakavarga = () => {
  return (
    <Grid container direction={'column'} pl={4} pr={4}>
      <Grid item width={'100%'} pb={4} pt={4}>
        <Typography fontFamily={'Playfair Display'} fontSize={'24px'} fontWeight={700} color={'white'} pb={2}>
          БАВ Ас
        </Typography>
        <img src={map} width={'100%'}/>
      </Grid>
      <Grid item container justifyContent={'space-between'}>
        <Grid item width={'calc(50% - 5px)'}>
          <Typography fontFamily={'Playfair Display'} fontSize={'24px'} fontWeight={700} color={'white'} p={'15px 0'}>
            БАВ Ас
          </Typography>
          <img src={map} width={'100%'}/>
        </Grid>
        <Grid item width={'calc(50% - 5px)'}>
          <Typography fontFamily={'Playfair Display'} fontSize={'24px'} fontWeight={700} color={'white'} p={'15px 0'}>
            БАВ Ас
          </Typography>
          <img src={map} width={'100%'}/>
        </Grid>
      </Grid>
      <Grid item container justifyContent={'space-between'}>
        <Grid item width={'calc(50% - 5px)'}>
          <Typography fontFamily={'Playfair Display'} fontSize={'24px'} fontWeight={700} color={'white'} p={'15px 0'}>
            БАВ Ас
          </Typography>
          <img src={map} width={'100%'}/>
        </Grid>
        <Grid item width={'calc(50% - 5px)'}>
          <Typography fontFamily={'Playfair Display'} fontSize={'24px'} fontWeight={700} color={'white'} p={'15px 0'}>
            БАВ Ас
          </Typography>
          <img src={map} width={'100%'}/>
        </Grid>
      </Grid>
      <Grid item container justifyContent={'space-between'}>
        <Grid item width={'calc(50% - 5px)'}>
          <Typography fontFamily={'Playfair Display'} fontSize={'24px'} fontWeight={700} color={'white'} p={'15px 0'}>
            БАВ Ас
          </Typography>
          <img src={map} width={'100%'}/>
        </Grid>
        <Grid item width={'calc(50% - 5px)'}>
          <Typography fontFamily={'Playfair Display'} fontSize={'24px'} fontWeight={700} color={'white'} p={'15px 0'}>
            БАВ Ас
          </Typography>
          <img src={map} width={'100%'}/>
        </Grid>
      </Grid>
      <Grid item container justifyContent={'space-between'}>
        <Grid item width={'calc(50% - 5px)'}>
          <Typography fontFamily={'Playfair Display'} fontSize={'24px'} fontWeight={700} color={'white'} p={'15px 0'}>
            БАВ Ас
          </Typography>
          <img src={map} width={'100%'}/>
        </Grid>
        <Grid item width={'calc(50% - 5px)'}>
          <Typography fontFamily={'Playfair Display'} fontSize={'24px'} fontWeight={700} color={'white'} p={'15px 0'}>
            БАВ Ас
          </Typography>
          <img src={map} width={'100%'}/>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Ashtakavarga;
