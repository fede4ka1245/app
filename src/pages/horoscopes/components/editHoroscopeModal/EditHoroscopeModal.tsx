import React, { useCallback, useEffect, useMemo, useState } from 'react';
import Modal from '../../../../components/modal/Modal';
import { Grid } from '@mui/material';
import PlanetBackground from '../../../../components/planetBackground/PlanetBackground';
import HoroscopeForm from '../../../../components/horoscopeForm/HoroscopeForm';
import { TimeZoneData } from '../../../../models/types/TimeZoneData';
import { AddressSuggestion } from '../../../../models/types/AddressSuggestion';
import { useGetHoroscopeAddressInformation, useGetHoroscopeUserInfo } from '../../../../store/selectors';
import { setHoroscopeUserInfo } from '../../../../store/reducers/horoscopesReducer';
import { useAppDispatch } from '../../../../store/store';
import { useLoadHoroscopes } from '../../../../hooks/useLoadHororscope';

interface EditHoroscopeModalProps {
  isEditModalOpen: boolean,
  toggleEditModal: (props?: any) => any
}

const EditHoroscopeModal = ({ isEditModalOpen, toggleEditModal }: EditHoroscopeModalProps) => {
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
  const dispatch = useAppDispatch();
  const loadHoroscopes = useLoadHoroscopes();

  const horoscopeUserInfo = useGetHoroscopeUserInfo();
  const horoscopeAddressInformation = useGetHoroscopeAddressInformation();

  useEffect(() => {
    setName(horoscopeUserInfo.userName);
    setDate(horoscopeUserInfo.date);
    setTime(horoscopeUserInfo.time);
    setTimeZone({
      hours: horoscopeUserInfo.hours,
      minutes: horoscopeUserInfo.minutes,
      greenwich: horoscopeUserInfo.greenwich
    });
    setAddressInformation(horoscopeAddressInformation || {
      latitude: horoscopeUserInfo.latitude,
      longitude: horoscopeUserInfo.longitude,
      value: horoscopeUserInfo.location,
      key: ''
    });
  }, [horoscopeUserInfo]);

  const isHoroscopeCountingDataChanged = useMemo(() => {
    return horoscopeUserInfo.date !== date || horoscopeUserInfo.time !== time ||
      horoscopeUserInfo.hours !== timeZone.hours || horoscopeUserInfo.minutes !== timeZone.minutes || horoscopeUserInfo.greenwich !== timeZone.greenwich ||
      horoscopeUserInfo.latitude !== addressInformation.latitude || horoscopeUserInfo.longitude !== addressInformation.longitude;
  }, [horoscopeUserInfo, date, time, addressInformation, timeZone]);

  const isHoroscopeDataChanged = useMemo(() => {
    return horoscopeUserInfo.userName !== name || horoscopeUserInfo.date !== date || horoscopeUserInfo.time !== time ||
      horoscopeUserInfo.hours !== timeZone.hours || horoscopeUserInfo.minutes !== timeZone.minutes || horoscopeUserInfo.greenwich !== timeZone.greenwich ||
      horoscopeUserInfo.latitude !== addressInformation.latitude || horoscopeUserInfo.longitude !== addressInformation.longitude;
  }, [horoscopeUserInfo, name, date, time, addressInformation, timeZone]);

  const onCountHoroscopeClick = useCallback(() => {
    dispatch(setHoroscopeUserInfo({
      userName: name,
      date,
      time,
      latitude: addressInformation?.latitude,
      longitude: addressInformation?.longitude,
      location: addressInformation?.value,
      greenwich: timeZone.greenwich,
      minutes: timeZone.minutes,
      hours: timeZone.hours
    }));

    if (!isHoroscopeCountingDataChanged) {
      toggleEditModal();
      return;
    }

    loadHoroscopes({
      userName: name,
      date,
      time,
      addressInformation,
      timeZoneData: timeZone
    });

    toggleEditModal();
  }, [name, date, time, addressInformation, timeZone, toggleEditModal, isHoroscopeCountingDataChanged, loadHoroscopes]);

  return (
    <Modal isOpen={isEditModalOpen} close={toggleEditModal} height={'calc(100vh - 80px)'}>
      <Grid container position={'relative'} height={'100%'}>
        <PlanetBackground />
        <Grid item p={2}>
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
            horoscopeCountButtonText={'Пересчитать гороскоп'}
            onCountHoroscopeClick={onCountHoroscopeClick}
            isCountHoroscopeButtonDisabled={!isHoroscopeDataChanged}
          />
        </Grid>
      </Grid>
    </Modal>
  );
};

export default EditHoroscopeModal;
