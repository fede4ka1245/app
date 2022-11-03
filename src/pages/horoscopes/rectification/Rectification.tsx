import React, { useCallback, useMemo, useState } from 'react';
import { Grid } from '@mui/material';
import Input from '../../../components/input/Input';
import { ButtonType } from '../../../components/button/ButtonProps';
import Button from '../../../components/button/Button';
import { InputType } from '../../../components/input/InputType';
import { useLoadHoroscopes } from '../../../hooks/useLoadHororscope';
import { useGetHoroscopeUserInfo } from '../../../store/selectors';

const Rectification = () => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const horoscopeUserInfo = useGetHoroscopeUserInfo();
  const name = useMemo(() => {
    return horoscopeUserInfo.userName;
  }, [horoscopeUserInfo]);

  const timeZone = useMemo(() => {
    return {
      hours: horoscopeUserInfo.hours,
      minutes: horoscopeUserInfo.minutes,
      greenwich: horoscopeUserInfo.greenwich
    };
  }, [horoscopeUserInfo]);

  const isButtonDisabled = useMemo(() => {
    return !(timeZone?.greenwich && timeZone?.hours && timeZone?.minutes) || !date || !name || !time;
  }, [date, name, time, timeZone]);

  const loadHoroscopes = useLoadHoroscopes();

  const onCountHoroscopesClick = useCallback(() => {
    if (!(timeZone?.greenwich && timeZone?.hours && timeZone?.minutes)) {
      return;
    }

    loadHoroscopes({
      userName: name,
      date,
      time,
      addressInformation: {
        value: horoscopeUserInfo.location,
        longitude: horoscopeUserInfo.longitude,
        latitude: horoscopeUserInfo.latitude
      },
      timeZoneData: timeZone
    });
  }, [loadHoroscopes, horoscopeUserInfo, timeZone]);

  return (
    <Grid container direction={'column'} p={2}>
      <Grid item container direction={'row'} spacing={2} pb={2}>
        <Grid item xs={6} md={6}>
          <Input placeholder='Дата' inputType={InputType.date} value={date} onChange={setDate}/>
        </Grid>
        <Grid item xs={6} md={6}>
          <Input placeholder='Время' inputType={InputType.time} value={time} onChange={setTime}/>
        </Grid>
      </Grid>
      <Grid item pt={2}>
        <Button text={'Расчитать'} isDisabled={isButtonDisabled} onClick={onCountHoroscopesClick} type={ButtonType.gradient}/>
      </Grid>
      <Grid item pt={2}>
        <Button text={'Сохранить'} type={ButtonType.outline}/>
      </Grid>
    </Grid>
  );
};

export default Rectification;
