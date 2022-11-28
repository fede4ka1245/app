import React, { useState } from 'react';
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
import HoroscopeForm from '../../components/horoscopeForm/HoroscopeForm';
import { TimeZoneData } from '../../models/types/TimeZoneData';
import { AddressSuggestion } from '../../models/types/AddressSuggestion';
import { useGetSavedHoroscopes } from '../../store/selectors';

const AstrologicalProcessor = () => {
  const navigate = useNavigate();

  const onMyHoroscopesClick = () => {
    navigate(routes.myHoroscopes);
  };

  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [timeZone, setTimeZone] = useState<TimeZoneData>({
    hours: '',
    minutes: '',
    greenwich: ''
  });
  const [addressInformation, setAddressInformation] = useState<AddressSuggestion>({
    latitude: '',
    longitude: '',
    value: '',
    key: ''
  });
  const savedHoroscopes = useGetSavedHoroscopes();

  return (
    <Grid position={'relative'}>
      <PlanetBackground />
      <Moon />
      <Grid container direction={'column'} pl={2} pr={2}>
        <Grid item pb={2}>
          <Header />
        </Grid>
        <Grid pb={2}>
          <HoroscopeForm
            name={name}
            setName={setName}
            date={date}
            setDate={setDate}
            time={time}
            setTime={setTime}
            timeZone={timeZone}
            setTimeZone={setTimeZone}
            addressInformation={addressInformation}
            setAddressInformation={setAddressInformation}
          />
        </Grid>
        <Grid item width={'100%'}>
          <Button text={`Мои гороскопы (${savedHoroscopes.length})`} type={ButtonType.outline} onClick={onMyHoroscopesClick}/>
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
    </Grid>
  );
};

export default AstrologicalProcessor;
