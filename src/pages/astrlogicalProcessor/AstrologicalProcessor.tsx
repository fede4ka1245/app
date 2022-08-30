import React, { useState } from 'react';
import Moon from '../../components/moon/Moon';
import { Grid, Typography } from '@mui/material';
import menu from './images/menu.svg';
import wallet from './images/wallet.svg';
import setting from './images/setting.svg';
import Input from '../../components/input/Input';
import Button from '../../components/button/Button';
import { ButtonType } from '../../components/button/ButtonProps';
import MasterClass from '../../components/masterClass/MasterClass';
import { routes } from '../../helpers/routes';
import { routes as horoscopesRoutes } from '../../pages/horoscopes/routes';
import { useNavigate } from 'react-router-dom';
import Video from '../../components/video/Video';
import PlanetBackground from '../../components/planetBackground/PlanetBackground';
import CoordinatesForm from './components/coordinatesForm/CoordinatesForm';
import Deals from '../../components/deals/Deals';
import { options } from '../../helpers/options';

const AstrologicalProcessor = () => {
  const navigate = useNavigate();

  const onMenuButtonClick = () => {
    navigate(routes.menu);
  };

  const onSettingsClick = () => {
    navigate(routes.settings);
  };

  const onMyHoroscopesClick = () => {
    navigate(routes.myHoroscopes);
  };

  const [isCustomCoordinates, setIsCustomCoordinates] = useState(false);

  const onInputCustomCoordinatesClick = () => {
    setIsCustomCoordinates(true);
  };

  const [isDealsOpen, setIsDealsOpen] = useState(false);

  const openDeals = () => {
    setIsDealsOpen(true);
  };

  const closeDeals = () => {
    setIsDealsOpen(false);
  };

  const onCountHoroscopesClick = () => {
    navigate(horoscopesRoutes.transitions);
  };

  return (
    <>
      <PlanetBackground />
      <Moon />
      {isDealsOpen && <Deals close={closeDeals}/>}
      <Grid container pl={4} pr={4} spacing={2}>
        <Grid item container direction={'row'} spacing={3} alignItems={'center'}>
          <Grid item>
            <img alt='menu' src={menu} onClick={onMenuButtonClick}/>
          </Grid>
          <Grid item flex={1}>
            <Typography color={'white'} fontFamily={'Gilroy'}>
              Астропроцессор
            </Typography>
          </Grid>
          <Grid item>
            <img alt='wallet' src={wallet} onClick={openDeals}/>
          </Grid>
          <Grid item>
            <img alt='setting' src={setting} onClick={onSettingsClick}/>
          </Grid>
        </Grid>
        <Grid item container>
          <Grid item xs={12} md={12} pb={2}>
            <Input placeholder='ФИО'/>
          </Grid>
          <Grid item container direction={'row'} spacing={2} pb={2}>
            <Grid item xs={6} md={6}>
              <Input placeholder='Дата'/>
            </Grid>
            <Grid item xs={6} md={6}>
              <Input placeholder='Время'/>
            </Grid>
          </Grid>
          <Grid item xs={12} md={12}>
            <Input placeholder='Место рождения' options={options} isSelect={true}/>
          </Grid>
        </Grid>
        <Grid item container spacing={2} direction={'row'} color={'#ABB0B2'}>
          <Grid item xs={4} md={4}>
            <Typography color={'#ABB0B2'} fontFamily={'Gilroy'} fontSize={'12px'}>
              Широта --
            </Typography>
          </Grid>
          <Grid item xs={4} md={4}>
            <Typography color={'#ABB0B2'} fontFamily={'Gilroy'} fontSize={'12px'}>
              Долгота --
            </Typography>
          </Grid>
          <Grid item xs={4} md={4}>
            <Typography color={'#ABB0B2'} fontFamily={'Gilroy'} fontSize={'12px'}>
              Часовой пояс --
            </Typography>
          </Grid>
        </Grid>
        {!isCustomCoordinates && <Grid item>
          <Typography color={'#99DAEA'} fontFamily={'Gilroy'} fontSize={'16px'} onClick={onInputCustomCoordinatesClick}>
            Ввести координаты вручную
          </Typography>
        </Grid>}
        {isCustomCoordinates && <Grid item>
          <CoordinatesForm />
        </Grid>}
        <Grid item width={'100%'}>
          <Button text='Расчитать гороскоп' onClick={onCountHoroscopesClick}/>
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
