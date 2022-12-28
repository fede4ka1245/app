import React from 'react';
import PlanetBackground from '../../components/planetBackground/PlanetBackground';
import { Grid, Typography } from '@mui/material';
import ButtonBack from '../../components/buttonBack/ButtonBack';
import { useNavigate } from 'react-router-dom';
import styles from './Rates.module.scss';
import RateCard from './RateCard/RateCard';
import logo from './assets/logo.svg';
import miniLogo from './assets/miniLogo.svg';
import { useHideNavbar } from '../../hooks/useHideNavbar';

const Rates = () => {
  const navigate = useNavigate();
  useHideNavbar();

  return (
    <Grid position={'relative'}>
      <PlanetBackground />
      <Grid container pl={2} pr={2} pb={4} direction={'column'}>
        <Grid item pt={4}>
          <ButtonBack label={'Назад'} onClick={() => navigate(-1)} />
        </Grid>
        <Grid item display={'flex'} justifyContent={'space-between'} pt={2}>
          <Typography letterSpacing={'0.07em'} color={'#F0F0F3'} textTransform={'uppercase'} fontSize={'15px'} fontWeight={'bold'}>
            ВАШ ТАРИФ
          </Typography>
          <Typography fontFamily={'Gilroy'} fontWeight={500} fontSize={'14px'} color={'#8fcade'}>
            {'История платежей >'}
          </Typography>
        </Grid>
        <Grid item justifyContent={'space-between'} pt={2}>
          <section className={styles.card}>
            <img src={logo} className={styles.logo}/>
            <Grid container direction={'column'} p={2} justifyContent={'space-between'} height={'100%'}>
              <Grid item display={'flex'} alignItems={'center'}>
                <img src={miniLogo} width={'20px'} height={'20px'}/>
                <Typography color={'white'} fontWeight={500} fontSize={'16px'} pl={1}>
                  Базовый, осталось 8 дней
                </Typography>
              </Grid>
              <Grid item>
                <Typography color={'white'} fontFamily={'Gilroy'} fontWeight={500} fontSize={'14px'}>
                  Безграничный доступна 7 дней + 1 беслатно
                  Сохранение в личном кабинете
                </Typography>
              </Grid>
              <Grid item>
                <Typography fontFamily={'Gilroy'} fontWeight={500} fontSize={'14px'} color={'#8fcade'}>
                  {'История платежей >'}
                </Typography>
              </Grid>
            </Grid>
          </section>
        </Grid>
        <Grid item pt={2}>
          <Typography letterSpacing={'0.07em'} color={'#F0F0F3'} textTransform={'uppercase'} fontSize={'15px'} fontWeight={'bold'}>
            Выбрать тариф
          </Typography>
        </Grid>
        <Grid item justifyContent={'space-between'} pt={2}>
          <RateCard
            timeUnit={'мес'}
            timeValue={1}
            price={9.99}
            lineWidth={'30%'}
          />
        </Grid>
        <Grid item justifyContent={'space-between'} pt={2}>
          <RateCard
            timeUnit={'мес'}
            timeValue={3}
            price={24.99}
            lineWidth={'40%'}
            background={'linear-gradient(225deg, #987642 13.28%, rgba(152, 118, 66, 0) 81.25%)'}
          />
        </Grid>
        <Grid item justifyContent={'space-between'} pt={2}>
          <RateCard
            timeUnit={'мес'}
            timeValue={6}
            price={99.99}
            lineWidth={'60%'}
            background={'linear-gradient(225deg, #9C9C9C 13.28%, rgba(112, 112, 112, 0) 81.25%)'}
          />
        </Grid>
        <Grid item justifyContent={'space-between'} pt={2}>
          <RateCard
            timeUnit={'год'}
            timeValue={1}
            price={99.99}
            lineWidth={'80%'}
            background={'linear-gradient(225deg, #DBBF2E 13.28%, rgba(229, 175, 36, 0) 81.25%)'}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Rates;
