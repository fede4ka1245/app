import React from 'react';
import { Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Moon from '../../components/moon/Moon';
import Button from '../../components/button/Button';
import { ButtonType } from '../../components/button/ButtonProps';
import MasterClass from '../../components/masterClass/MasterClass';
import Video from '../../components/video/Video';
import PlanetBackground from '../../components/planetBackground/PlanetBackground';
import { routes } from '../../models/enums/routes';
import Header from './components/header/Header';
import HoroscopeForm from './components/horoscopeForm/HoroscopeForm';

const AstrologicalProcessor = () => {
  const navigate = useNavigate();

  const onMyHoroscopesClick = () => {
    navigate(routes.myHoroscopes);
  };

  return (
    <>
      <PlanetBackground />
      <Moon />
      <Grid container direction={'column'} pl={4} pr={4}>
        <Grid item pb={2}>
          <Header />
        </Grid>
        <Grid pb={2}>
          <HoroscopeForm />
        </Grid>
        <Grid item width={'100%'}>
          <Button text='Мои гороскопы (5)' type={ButtonType.outline} onClick={onMyHoroscopesClick}/>
        </Grid>
      </Grid>
      <Grid container p={2} rowSpacing={2}>
        <Grid item width={'100%'}>
          <Typography color={'white'} fontWeight={'bold'} fontFamily={'Playfair Display'} fontSize={24} textAlign={'center'}>
            Мастер класс месяца
          </Typography>
        </Grid>
        <Grid item>
          <MasterClass />
        </Grid>
        <Grid item width={'100%'}>
          <Typography color={'white'} fontWeight={'bold'} fontFamily={'Playfair Display'} fontSize={24} textAlign={'center'}>
            Как это работает
          </Typography>
        </Grid>
        <Grid item width={'100%'}>
          <Video />
        </Grid>
      </Grid>
    </>
  );
};

export default AstrologicalProcessor;
