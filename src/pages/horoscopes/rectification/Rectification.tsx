import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Grid } from '@mui/material';
import Input from '../../../components/input/Input';
import { ButtonType } from '../../../components/button/ButtonProps';
import Button from '../../../components/button/Button';
import { InputType } from '../../../components/input/InputType';
import { useLoadHoroscopes } from '../../../hooks/useLoadHororscope';
import { useGetHoroscopeUserInfo } from '../../../store/selectors';
import ButtonPrevForward from './components/buttonPrevForward/ButtonPrevForward';

const timeOptions = [
  {
    label: '1 минута',
    value: 'ONE_MINUTE'
  },
  {
    label: '5 минут',
    value: 'FIVE_MINUTES'
  }
];

const Rectification = () => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [forwardTimeOption, setForwardTimeOption] = useState(timeOptions[0]);
  const [prevTimeOption, setPrevTimeOption] = useState(timeOptions[0]);

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

  useEffect(() => {
    setDate(horoscopeUserInfo.date);
    setTime(horoscopeUserInfo.time);
  }, []);

  const targetUserDate = useMemo(() => {
    const [day, month, year] = date.split('.').map(Number);
    const [hours, minutes] = time.split(':').map(Number);

    return new Date(year, month - 1, day, hours, minutes);
  }, [date, time]);

  const onButtonForwardClick = useCallback((isForward: boolean) => {
    let date;

    if (isForward) {
      date = new Date(forwardTimeOption.value === 'FIVE_MINUTES'
        ? targetUserDate.getTime() + 5 * 60 * 1000
        : targetUserDate.getTime() + 60 * 1000);
    } else {
      date = new Date(prevTimeOption.value === 'FIVE_MINUTES'
        ? targetUserDate.getTime() - 5 * 60 * 1000
        : targetUserDate.getTime() - 60 * 1000);
    }

    const minutes = String(date.getMinutes()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const year = String(date.getFullYear()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    setDate(`${day}.${month}.${year}`);
    setTime(`${hours}:${minutes}`);
  }, [forwardTimeOption, prevTimeOption, targetUserDate]);

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
      <Grid item container flexDirection={'row'} display={'flex'} pb={2}>
        <Grid item width={'40px'} mr={1}>
          <ButtonPrevForward onClick={() => onButtonForwardClick(false)} type={'prev'}/>
        </Grid>
        <Grid item flex={1} mr={2}>
          <Input placeholder='Шаг назад' options={timeOptions} setTargetOption={setPrevTimeOption} targetOption={prevTimeOption} inputType={InputType.options}/>
        </Grid>
        <Grid item flex={1} mr={1}>
          <Input placeholder='Шаг вперед' options={timeOptions} setTargetOption={setForwardTimeOption} targetOption={forwardTimeOption} inputType={InputType.options}/>
        </Grid>
        <Grid item width={'40px'}>
          <ButtonPrevForward onClick={() => onButtonForwardClick(true)} type={'forward'}/>
        </Grid>
      </Grid>
      <Grid item pt={2}>
        <Button text={'Рассчитать'} isDisabled={isButtonDisabled} onClick={onCountHoroscopesClick} type={ButtonType.gradient}/>
      </Grid>
      <Grid item pt={2}>
        <Button text={'Сохранить'} type={ButtonType.outline}/>
      </Grid>
    </Grid>
  );
};

export default Rectification;
