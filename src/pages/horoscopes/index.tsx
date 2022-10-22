import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import PlanetBackground from '../../components/planetBackground/PlanetBackground';
import { Grid, Typography } from '@mui/material';
import Map from '../../components/map/Map';
import Buttons from './components/buttons/Buttons';
import Input from '../../components/input/Input';
import { routes } from './routes';
import { Option } from '../../models/types/Option';
import { InputType } from '../../components/input/InputType';
import { useHideNavbar } from '../../hooks/useHideNavbar';

const routesOptions = [
  {
    label: 'Транзиты',
    value: routes.transitions
  },
  {
    label: 'Натальная к.',
    value: routes.natMap
  },
  {
    label: 'Даши',
    value: routes.dashi
  },
  {
    label: 'Варшпахала',
    value: routes.varshapkhala
  },
  {
    label: 'Аштакаварга',
    value: routes.ashtakavarga
  },
  {
    label: 'Чакры',
    value: routes.zones
  },
  {
    label: 'Йоги',
    value: routes.yogas
  },
  {
    label: 'Ректификация',
    value: routes.rectification
  }
];

const Index = () => {
  const [targetRoute, setTargetRoute] = useState<Option>(routesOptions[0]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!targetRoute?.value) {
      return;
    }

    navigate(targetRoute.value);
  }, [targetRoute]);

  useHideNavbar();

  return (
    <>
      <PlanetBackground />
      <Grid item pl={4} pr={4} pt={4}>
        <Buttons />
      </Grid >
      <Grid item pl={4} pr={4} pt={2}>
        <Map />
      </Grid>
      <Grid pt={2} pl={4} pr={4} container direction={'column'} justifyContent={'center'}>
        <Grid item container direction={'row'} justifyContent={'space-between'}>
          <Grid item width={'calc(50% - 5px)'}>
            <Input placeholder={'Дробные карты'} inputType={InputType.options}/>
          </Grid >
          <Grid item width={'calc(50% - 5px)'}>
            <Input placeholder={'Раздел'} inputType={InputType.options} options={routesOptions} setTargetOption={setTargetRoute} targetOption={targetRoute}/>
          </Grid>
        </Grid>
        <Grid item pt={1}>
          <Typography fontFamily={'Gilroy'} fontWeight={500} fontSize={'14px'} color={'#C3C9CD'} textAlign={'center'}>
            Иванова Катерина, 19.01.1980 15:00 +3, Москва
          </Typography>
        </Grid>
      </Grid>
      <Outlet />
    </>
  );
};

export default Index;
