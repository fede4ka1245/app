import React, { useCallback, useMemo, useState, useRef, useEffect } from 'react';
import { Grid, Typography } from '@mui/material';
import Input from '../../../../components/input/Input';
import { InputType } from '../../../../components/input/InputType';
import AddressInput from '../../../../components/addressInput/AddressInput';
import Button from '../../../../components/button/Button';
import { AddressInformation } from '../../../../models/types/AddressInformation';
import { useLoadHoroscopes } from '../../../../hooks/useLoadHororscope';
import TimeZoneForm from '../../../../components/timeZoneForm/TimeZoneForm';
import { getTimeZoneOffset } from '../../../../helpers/address/getSuggestions';
import { AddressSuggestion } from '../../../../models/types/AddressSuggestion';
import { TimeZoneData } from '../../../../models/types/TimeZoneData';
import { getTimeZoneOffsetFromGreenwichData } from '../../../../helpers/getTimeZoneOffsetFromGreenwichData';

const HoroscopeForm = () => {
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
  const [isCustomCoordinates, setIsCustomCoordinates] = useState(false);
  const addressInformationRef = useRef<AddressSuggestion>();

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

  const toggleCustomCoordinates = useCallback(() => {
    if (isCustomCoordinates && addressInformationRef.current) {
      setAddressInformation(addressInformationRef.current);
    } else {
      addressInformationRef.current = addressInformation;
    }

    setIsCustomCoordinates(!isCustomCoordinates);
  }, [isCustomCoordinates, addressInformation]);

  const loadHoroscopes = useLoadHoroscopes();

  const onCountHoroscopesClick = useCallback(() => {
    if (!(timeZone?.greenwich && timeZone?.hours && timeZone?.minutes)) {
      return;
    }

    loadHoroscopes({
      userName: name,
      date,
      time,
      addressInformation,
      timeZoneData: timeZone
    });
  }, [loadHoroscopes, addressInformation, timeZone]);

  const isButtonDisabled = useMemo(() => {
    return !addressInformation.longitude || !addressInformation.latitude || !(timeZone?.greenwich && timeZone?.hours && timeZone?.minutes) ||
      !date || !name || !time;
  }, [addressInformation, date, name, time, timeZone]);

  const onSetAddressInput = useCallback((_addressInformation: Omit<AddressInformation, 'timeZoneOffset'>) => {
    setAddressInformation({
      ...addressInformation,
      ..._addressInformation
    });
  }, [addressInformation, setAddressInformation]);

  useEffect(() => {
    if (date && time && addressInformation) {
      getTimeZoneOffset(addressInformation.key, date, time)
        .then(({ hours, minutes, greenwich }) => {
          setTimeZone({ hours, minutes, greenwich });
        });
    }
  }, [date, time, addressInformation]);

  const formattedTimeZone = useMemo(() => {
    if (!(timeZone?.greenwich && timeZone?.hours && timeZone?.minutes)) {
      return;
    }

    return getTimeZoneOffsetFromGreenwichData(timeZone.greenwich, timeZone.hours, timeZone.minutes);
  }, [timeZone]);

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
          setAddressInfo={onSetAddressInput}
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
            Часовой пояс: {formattedTimeZone || '--'}
          </Typography>
        </Grid>
      </Grid>
      {!isCustomCoordinates && <Grid item pt={2}>
        <Typography color={'#99DAEA'} fontFamily={'Gilroy'} fontSize={'16px'} onClick={toggleCustomCoordinates}>
          Ввести координаты вручную
        </Typography>
      </Grid>}
      {isCustomCoordinates && <>
        <Grid item pb={2} pt={2}>
          <Typography fontFamily={'Gilroy'} color={'white'} fontSize={'16px'} fontWeight={600} onClick={toggleCustomCoordinates}>
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
        <Grid item pb={2}>
          <Typography fontFamily={'Gilroy'} color={'white'} fontSize={'16px'} fontWeight={600} onClick={toggleCustomCoordinates}>
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
      </>}
      <Grid item width={'100%'} pt={2}>
        <Button text='Рассчитать гороскоп' onClick={onCountHoroscopesClick} isDisabled={isButtonDisabled}/>
      </Grid>
    </>
  );
};

export default HoroscopeForm;
