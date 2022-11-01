import React, { useCallback, useMemo, useState } from 'react';
import { Grid, Typography } from '@mui/material';
import Input from '../../../components/input/Input';
import { ButtonType } from '../../../components/button/ButtonProps';
import Button from '../../../components/button/Button';
import { InputType } from '../../../components/input/InputType';
import { TimeZoneData } from '../../../models/types/TimeZoneData';
import TimeZoneForm from '../../../components/timeZoneForm/TimeZoneForm';
import { useLoadHoroscopes } from '../../../hooks/useLoadHororscope';
import { useGetHoroscopeUserInfo } from '../../../store/selectors';

const Rectification = () => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [timeZone, setTimeZone] = useState<TimeZoneData>({
    hours: '',
    minutes: '',
    greenwich: ''
  });
  const horoscopeUserInfo = useGetHoroscopeUserInfo();

  const setGreenwich = useCallback((greenwich: string) => {
    setTimeZone({
      ...timeZone,
      greenwich
    });
  }, [timeZone, setTimeZone]);

  const setHours = useCallback((hours: string) => {
    setTimeZone({
      ...timeZone,
      hours
    });
  }, [timeZone, setTimeZone]);

  const setMinutes = useCallback((minutes: string) => {
    setTimeZone({
      ...timeZone,
      minutes
    });
  }, [timeZone, setTimeZone]);

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
    <Grid container direction={'column'} pb={2} pl={2} pr={2}>
      <Grid item pt={2}>
        <Typography fontFamily={'Playfair Display'} fontWeight={700} fontSize={'24px'} color={'white'}>
          Ректификации
        </Typography>
      </Grid>
      <Grid item xs={12} md={12} pb={2} pt={2}>
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
      <Grid item pb={2}>
        <Typography fontFamily={'Gilroy'} color={'white'} fontSize={'16px'} fontWeight={600}>
          Часовой пояс
        </Typography>
      </Grid>
      <Grid item container display={'flex'} pb={2}>
        <TimeZoneForm
          greenwich={timeZone?.greenwich}
          setGreenwich={setGreenwich}
          minutes={timeZone?.minutes}
          setMinutes={setMinutes}
          hours={timeZone?.hours}
          setHours={setHours}
        />
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
