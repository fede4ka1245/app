import React, { useCallback, useMemo, useState, useRef, useEffect } from 'react';
import { Grid, Typography } from '@mui/material';
import Input from '../input/Input';
import { InputType } from '../input/InputType';
import AddressInput from '../addressInput/AddressInput';
import Button from '../button/Button';
import { AddressInformation } from '../../models/types/AddressInformation';
import { useLoadHoroscopes } from '../../hooks/useLoadHororscope';
import TimeZoneForm from '../timeZoneForm/TimeZoneForm';
import { getTimeZoneOffset } from '../../helpers/address/getSuggestions';
import { AddressSuggestion } from '../../models/types/AddressSuggestion';
import { TimeZoneData } from '../../models/types/TimeZoneData';
import { getTimeZoneOffsetFromGreenwichData } from '../../helpers/getTimeZoneOffsetFromGreenwichData';
import { routes as horoscopesRoutes } from '../../pages/horoscopes/routes';
import { useNavigate } from 'react-router-dom';
import { LoadHoroscope } from '../../models/types/LoadHororscope';

interface HoroscopeFormProps {
  name: string,
  setName: (name: string) => any,
  date: string,
  setDate: (date: string) => any,
  time: string,
  setTime: (time: string) => any,
  timeZone: TimeZoneData,
  setTimeZone: (timeZone: TimeZoneData) => any,
  addressInformation: AddressSuggestion,
  setAddressInformation: (addressInformation: AddressSuggestion) => any,
  onCountHoroscopeClick?: (horoscopeProps: LoadHoroscope) => any,
  isCountHoroscopeButtonDisabled?: boolean,
  horoscopeCountButtonText?: string
}

const HoroscopeForm = ({ name, setName, date, setDate, time, setTime, timeZone, setTimeZone, addressInformation, setAddressInformation, onCountHoroscopeClick, isCountHoroscopeButtonDisabled, horoscopeCountButtonText } : HoroscopeFormProps) => {
  const [isCustomCoordinates, setIsCustomCoordinates] = useState(false);
  const addressInformationRef = useRef<AddressSuggestion>();
  const navigate = useNavigate();

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

    if (onCountHoroscopeClick) {
      onCountHoroscopeClick({
        userName: name,
        date,
        time,
        addressInformation,
        timeZoneData: timeZone
      });

      return;
    }

    loadHoroscopes({
      userName: name,
      date,
      time,
      addressInformation,
      timeZoneData: timeZone
    }).then(() => {
      navigate(horoscopesRoutes.transitions);
    });
  }, [loadHoroscopes, addressInformation, timeZone, onCountHoroscopeClick]);

  const isButtonDisabled = useMemo(() => {
    return !addressInformation.longitude || !addressInformation.latitude || !(timeZone?.greenwich && timeZone?.hours && timeZone?.minutes) ||
      !date || !name || !time || isCountHoroscopeButtonDisabled;
  }, [addressInformation, date, name, time, timeZone, isCountHoroscopeButtonDisabled]);

  const onSetAddressInput = useCallback((_addressInformation: Omit<AddressInformation, 'timeZoneOffset'>) => {
    setAddressInformation({
      ...addressInformation,
      ..._addressInformation
    });
  }, [addressInformation, setAddressInformation]);

  useEffect(() => {
    if (date && time && addressInformation?.key) {
      setTimeZone({ hours: '', minutes: '', greenwich: '' });
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
          <Input placeholder='ДД.ММ.ГГГГ' inputType={InputType.date} value={date} onChange={setDate}/>
        </Grid>
        <Grid item xs={6} md={6}>
          <Input placeholder='00.00.00' inputType={InputType.time} value={time} onChange={setTime}/>
        </Grid>
      </Grid>
      <Grid item xs={12} md={12}>
        <AddressInput
          setAddressInfo={onSetAddressInput}
          placeholder={'Место рождения'}
          disabled={isCustomCoordinates}
          addressInfo={addressInformation}
        />
      </Grid>
      <Grid item container direction={'row'} color={'#ABB0B2'} display={'flex'} pt={2}>
        <Grid item flex={1}>
          <Typography color={'#ABB0B2'} fontFamily={'Gilroy'} fontSize={'12px'} textAlign={'left'}>
            Широта: {addressInformation?.latitude || '--'}
          </Typography>
        </Grid>
        <Grid item flex={1}>
          <Typography color={'#ABB0B2'} fontFamily={'Gilroy'} fontSize={'12px'} textAlign={'center'}>
            Долгота: {addressInformation?.longitude || '--'}
          </Typography>
        </Grid>
        <Grid item flex={1}>
          <Typography color={'#ABB0B2'} fontFamily={'Gilroy'} fontSize={'12px'} textAlign={'right'}>
            Час. пояс: {formattedTimeZone || '--'}
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
        <Button text={horoscopeCountButtonText || 'Рассчитать гороскоп'} onClick={onCountHoroscopesClick} isDisabled={isButtonDisabled}/>
      </Grid>
    </>
  );
};

export default HoroscopeForm;
