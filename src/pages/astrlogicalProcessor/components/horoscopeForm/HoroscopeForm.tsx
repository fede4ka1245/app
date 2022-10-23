import React, { useCallback, useState } from 'react';
import { Grid, Typography } from '@mui/material';
import Input from '../../../../components/input/Input';
import { InputType } from '../../../../components/input/InputType';
import AddressInput from '../../../../components/addressInput/AddressInput';
import Button from '../../../../components/button/Button';
import { AddressInformation } from '../../../../models/types/AddressInformation';
import { useAppDispatch } from '../../../../store/store';
import { useNavigate } from 'react-router-dom';
import { setIsAppLoading } from '../../../../store/reducers/preferencesReducer';
import { getMaps } from '../../../../api/getMaps';
import { setHoroscopeUserInfo, setMaps } from '../../../../store/reducers/horoscopesReducer';
import { routes as horoscopesRoutes } from '../../../horoscopes/routes';

const HoroscopeForm = () => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [addressInformation, setAddressInformation] = useState<AddressInformation>({
    latitude: '',
    longitude: '',
    value: '',
    timeZoneOffset: ''
  });
  const [isCustomCoordinates, setIsCustomCoordinates] = useState(false);

  const setTimeZoneOffset = useCallback((timeZoneOffset: string) => {
    setAddressInformation({
      ...addressInformation,
      timeZoneOffset
    });
  }, [addressInformation]);

  const setLatitude = useCallback((latitude: string) => {
    setAddressInformation({
      ...addressInformation,
      latitude
    });
  }, [addressInformation]);

  const setLongitude = useCallback((longitude: string) => {
    setAddressInformation({
      ...addressInformation,
      longitude
    });
  }, [addressInformation]);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onInputCustomCoordinatesClick = () => {
    setIsCustomCoordinates(true);
  };

  const onCountHoroscopesClick = async () => {
    if (!addressInformation?.latitude || !addressInformation?.longitude) {
      return;
    }

    dispatch(setIsAppLoading(true));

    try {
      const maps = await getMaps({
        userName: name,
        date,
        time,
        latitude: addressInformation?.latitude,
        longitude: addressInformation?.longitude
      });

      dispatch(setHoroscopeUserInfo({
        userName: name,
        date,
        time,
        latitude: addressInformation?.latitude,
        longitude: addressInformation?.longitude,
        location: addressInformation?.value,
        timeZoneOffset: addressInformation?.timeZoneOffset
      }));
      dispatch(setMaps(maps));

      navigate(horoscopesRoutes.transitions);
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setIsAppLoading(false));
    }
  };

  return (
    <>
      <Grid item xs={12} md={12} pb={2}>
        <Input placeholder='ФИО' value={name} onChange={setName}/>
      </Grid>
      <Grid item container direction={'row'} spacing={2} pb={2}>
        <Grid item xs={6} md={6}>
          <Input placeholder='Дата' inputType={InputType.date} value={date} onChange={setDate}/>
        </Grid>
        <Grid item xs={6} md={6}>
          <Input placeholder='Время' inputType={InputType.time} value={time} onChange={setTime}/>
        </Grid>
      </Grid>
      <Grid item xs={12} md={12}>
        <AddressInput
          setAddressInfo={setAddressInformation}
          placeholder={'Место рождения'}
          disabled={isCustomCoordinates}
        />
      </Grid>
      <Grid item container direction={'row'} color={'#ABB0B2'} display={'flex'} pt={2}>
        <Grid item flex={1}>
          <Typography color={'#ABB0B2'} fontFamily={'Gilroy'} fontSize={'12px'}>
            Широта: {addressInformation?.latitude || '--'}
          </Typography>
        </Grid>
        <Grid item flex={1}>
          <Typography color={'#ABB0B2'} fontFamily={'Gilroy'} fontSize={'12px'}>
            Долгота: {addressInformation?.longitude || '--'}
          </Typography>
        </Grid>
        <Grid item flex={1}>
          <Typography color={'#ABB0B2'} fontFamily={'Gilroy'} fontSize={'12px'}>
            Часовой пояс: {addressInformation?.timeZoneOffset || '--'}
          </Typography>
        </Grid>
      </Grid>
      {!isCustomCoordinates && <Grid item pt={2}>
        <Typography color={'#99DAEA'} fontFamily={'Gilroy'} fontSize={'16px'} onClick={onInputCustomCoordinatesClick}>
          Ввести координаты вручную
        </Typography>
      </Grid>}
      {isCustomCoordinates && <>
        <Grid item pb={2} pt={2}>
          <Typography fontFamily={'Gilroy'} color={'white'} fontSize={'16px'} fontWeight={600}>
            Ввести координаты вручную
          </Typography>
        </Grid>
        <Grid item container display={'flex'} pb={2}>
          <Grid item flex={1}>
            <Input placeholder='Широта' inputType={InputType.coordinates} onChange={setLatitude}/>
          </Grid>
          <Grid item flex={1} pl={2}>
            <Input placeholder='Долгота' inputType={InputType.coordinates} onChange={setLongitude}/>
          </Grid>
        </Grid>
        <Grid item width={'calc(50% - 8px)'}>
          <Input placeholder={'Час. пояс'} isSelect={true} onChange={setTimeZoneOffset}/>
        </Grid>
      </>}
      <Grid item width={'100%'} pt={2}>
        <Button text='Расчитать гороскоп' onClick={onCountHoroscopesClick}/>
      </Grid>
    </>
  );
};

export default HoroscopeForm;
