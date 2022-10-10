import React, { useCallback } from 'react';
import { Grid, Typography } from '@mui/material';
import menu from '../../pages/forum/assets/menu.svg';
import wallet from '../../pages/forum/assets/wallet.svg';
import search from '../../pages/forum/assets/search.svg';
import { useNavigate } from 'react-router-dom';
import { routes } from '../../helpers/routes';

const PageHeader = ({ page }: any) => {
  const navigate = useNavigate();

  const onMenuClick = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  const onWalletClick = () => {
    navigate(routes.rates);
  };

  return (
    <Grid container pl={2} pr={2} alignItems={'center'}>
      <Grid item pr={2} alignItems={'center'} display={'flex'}>
        <img src={menu} width={30} height={30} onClick={onMenuClick}/>
      </Grid>
      <Grid item mr={'auto'}>
        <Typography fontFamily={'Gilroy'} fontWeight={700} fontSize={'18px'} color={'#37366B'}>
          {page}
        </Typography>
      </Grid>
      <Grid item mr={3}>
        <img src={wallet} onClick={onWalletClick} width={30} height={30}/>
      </Grid>
      <Grid item>
        <img src={search} width={30} height={30}/>
      </Grid>
    </Grid>
  );
};

export default PageHeader;
