import React from 'react';
import { Grid, Typography } from '@mui/material';
import logo from './images/logo.svg';
import Input from '../../components/input/Input';
import Button from '../../components/button/Button';
import { useNavigate } from 'react-router-dom';
import { routes } from '../../helpers/routes';
import GalaxyBackground from '../../components/galaxyBackground/GalaxyBackground';

const Authorization = () => {
  const navigate = useNavigate();

  const onEnterClick = () => {
    navigate(routes.personal, { replace: true });
  };

  return (
    <div>
      <GalaxyBackground />
      <Grid container direction={'column'} height={'100vh'} justifyContent={'center'} pl={4} pr={4}>
        <Grid item container justifyContent={'center'} alignItems={'center'} flex={1}>
          <img alt='logo' src={logo} width={200} height={250}/>
        </Grid>
        <Grid item container pb={2}>
          <Typography color={'white'} fontFamily={'Gilroy'}>
            Введите номер телефона
          </Typography>
        </Grid>
        <Grid item container pb={2}>
          <Input placeholder={'+7 (000) 000-00-00'}/>
        </Grid>
        <Grid item container pb={4}>
          <Button onClick={onEnterClick} text={'Войти'}/>
        </Grid>
      </Grid>
    </div>
  );
};

export default Authorization;
