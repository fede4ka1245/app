import React from 'react';
import { Grid, Typography } from '@mui/material';
import menu from './assets/menu.svg';
import wallet from './assets/wallet.svg';
import setting from './assets/setting.svg';
import { useNavigate } from 'react-router-dom';
import { routes } from '../../../../models/enums/routes';

const Header = () => {
  const navigate = useNavigate();

  const onMenuButtonClick = () => {
    navigate(routes.menu);
  };

  const onSettingsClick = () => {
    navigate(routes.settings);
  };

  const onWalletClick = () => {
    navigate(routes.rates);
  };

  return (
    <Grid item container direction={'row'} alignItems={'center'}>
      <Grid item pr={3} display={'flex'} justifyContent={'center'} alignItems={'center'}>
        <img alt='menu' width={'30px'} height={'30px'} src={menu} onClick={onMenuButtonClick}/>
      </Grid>
      <Grid item flex={1}>
        <Typography color={'white'} fontFamily={'Gilroy'}>
          Астропроцессор
        </Typography>
      </Grid>
      <Grid item pr={3}>
        <img alt='wallet' width={'28px'} height={'28px'} onClick={onWalletClick} src={wallet}/>
      </Grid>
      <Grid item>
        <img alt='setting' width={'28px'} height={'28px'} src={setting} onClick={onSettingsClick}/>
      </Grid>
    </Grid>
  );
};

export default Header;
