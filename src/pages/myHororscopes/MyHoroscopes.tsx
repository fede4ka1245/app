import React, { useState } from 'react';
import Moon from '../../components/moon/Moon';
import PlanetBackground from '../../components/planetBackground/PlanetBackground';
import { Grid, Typography } from '@mui/material';
import ButtonBack from '../../components/buttonBack/ButtonBack';
import { useNavigate } from 'react-router-dom';
import MyHoroscope from '../../components/myHororscope/MyHoroscope';
import search from './assets/search.svg';
import { useHideNavbar } from '../../hooks/useHideNavbar';
import { useGetSavedHoroscopes } from '../../store/selectors';
import { SavedHoroscope } from '../../models/types/SavedHoroscopes';

const horoscopes = [
  {
    name: 'Анастасия Квашонкина',
    city: 'Москва',
    date: '19.01.1980 15:00'
  },
  {
    name: 'Анастасия Квашонкина',
    city: 'Москва',
    date: '19.01.1980 15:00'
  },
  {
    name: 'Анастасия Квашонкина',
    city: 'Москва',
    date: '19.01.1980 15:00'
  },
  {
    name: 'Анастасия Квашонкина',
    city: 'Москва',
    date: '19.01.1980 15:00'
  }
];

const MyHoroscopes = () => {
  const navigate = useNavigate();
  const savedHoroscopes = useGetSavedHoroscopes();

  useHideNavbar();

  return (
    <Grid position={'relative'} height={'100%'} width={'100%'} minHeight={'100vh'}>
      <PlanetBackground/>
      <Moon/>
      <Grid container pt={5} pb={5} rowSpacing={2} overflow={'hidden'}>
        <Grid item container alignItems={'center'} justifyContent={'space-between'} pr={2} pl={2}>
          <Grid item>
            <ButtonBack label={'Назад'} onClick={() => navigate(-1)}/>
          </Grid>
          <Grid item>
            <img alt='search' src={search} width={'20px'} height={'20px'}/>
          </Grid>
        </Grid>
        <Grid item pt={2} pr={2} pl={2}>
          <Typography fontFamily={'Playfair Display'} fontWeight={'bold'} fontSize={24} color={'white'} textAlign={'center'}>
            Мои гороскопы ({ savedHoroscopes.length })
          </Typography>
        </Grid>
        <Grid item container direction={'column'}>
          {savedHoroscopes.map((savedHoroscope: SavedHoroscope, index) => (
            <Grid key={index} item pb={2} pr={2} pl={2}>
              <MyHoroscope horoscope={savedHoroscope} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MyHoroscopes;
