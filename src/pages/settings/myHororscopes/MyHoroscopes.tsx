import React, { useState } from 'react';
import Moon from '../../../components/moon/Moon';
import PlanetBackground from '../../../components/planetBackground/PlanetBackground';
import { Grid, Typography } from '@mui/material';
import ButtonBack from '../../../components/buttonBack/ButtonBack';
import { useNavigate } from 'react-router-dom';
import MyHoroscope from '../../../components/myHororscope/MyHoroscope';
import search from './assets/search.svg';

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
  const [myHoroscopes, setMyHoroscopes] = useState(horoscopes);

  return (
    <>
      <Moon/>
      <PlanetBackground/>
      <Grid container pr={4} pl={4} pt={5} pb={5} rowSpacing={2}>
        <Grid item container alignItems={'center'} justifyContent={'space-between'}>
          <Grid item>
            <ButtonBack label={'Настройки'} onClick={() => navigate(-1)}/>
          </Grid>
          <Grid item>
            <img alt='search' src={search} width={'20px'} height={'20px'}/>
          </Grid>
        </Grid>
        <Grid item pt={2}>
          <Typography fontFamily={'Playfair Display'} fontWeight={'bold'} fontSize={24} color={'white'} textAlign={'center'}>
            Мои гороскопы ({myHoroscopes.length})
          </Typography>
        </Grid>
        <Grid item container direction={'column'}>
          {myHoroscopes.map(({ name, date, city }, index) => (
            <Grid key={index} item pb={2}>
              <MyHoroscope name={name} date={date} city={city} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </>
  );
};

export default MyHoroscopes;
