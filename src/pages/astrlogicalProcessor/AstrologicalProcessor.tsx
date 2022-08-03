import React, { useEffect } from 'react';
import Moon from '../../components/moon/Moon';
import { Grid, Typography } from '@mui/material';
import menu from './images/menu.svg';
import wallet from './images/wallet.svg';
import setting from './images/setting.svg';
import Input from '../../components/input/Input';
import Button from '../../components/button/Button';
import { ButtonType } from '../../components/button/ButtonProps';
import MasterClass from '../../components/masterClass/MasterClass';
import { useSetBackground } from '../../hooks/useSetBackground';
import start from './images/start.svg';
import { routes } from '../../helpers/routes';
import { useNavigate } from 'react-router-dom';

const AstrologicalProcessor = () => {
  useSetBackground('img.png', true);

  const navigate = useNavigate();

  const onMenuButtonClick = () => {
    navigate(routes.menu, { replace: true });
  };

  return (
    <div
    >
      <Moon />
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
            <img alt='wallet' src={wallet}/>
          </Grid>
          <Grid item>
            <img alt='setting' src={setting}/>
          </Grid>
        </Grid>
        <Grid item container spacing={2}>
          <Grid item xs={12} md={12}>
            <Input placeholder='ФИО'/>
          </Grid>
          <Grid item container direction={'row'} spacing={2}>
            <Grid item xs={6} md={6}>
              <Input placeholder='Дата'/>
            </Grid>
            <Grid item xs={6} md={6}>
              <Input placeholder='Время'/>
            </Grid>
          </Grid>
          <Grid item xs={12} md={12}>
            <Input placeholder='Место рождения'/>
          </Grid>
        </Grid>
        <Grid item container spacing={2} direction={'row'} color={'#ABB0B2'}>
          <Grid item xs={4} md={4}>
            <Typography color={'white'} fontFamily={'arial'}>
              Широта --
            </Typography>
          </Grid>
          <Grid item xs={4} md={4}>
            <Typography color={'white'} fontFamily={'arial'}>
              Долгота --
            </Typography>
          </Grid>
          <Grid item xs={4} md={4}>
            <Typography color={'white'} fontFamily={'arial'}>
              Долгота --
            </Typography>
          </Grid>
        </Grid>
        <Grid item>
          <Typography color={'#99DAEA'}>
            Ввести координаты вручную
          </Typography>
        </Grid>
        <Grid item width={'100%'}>
          <Button text='Расчитать гороскоп'/>
        </Grid>
        <Grid item width={'100%'}>
          <Button text='Мои гороскопы(5)' type={ButtonType.outline}/>
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
          <div style={{
            width: '100%',
            height: '250px',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'top',
            backgroundImage: 'url(video.png)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '10px'
          }}
          >
            <div>
              <img src={start}/>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default AstrologicalProcessor;
