import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Grid } from '@mui/material';
import Input from '../../../../components/input/Input';
import { InputType } from '../../../../components/input/InputType';
import Button from '../../../../components/button/Button';
import { ButtonType } from '../../../../components/button/ButtonProps';
import {
  useGetHoroscopeUserInfo,
  useGetIsTransitionMapsActive,
  useGetTargetMapValue,
  useGetTransitionDate,
  useGetTransitionIsRashiTableLoading,
  useGetTransitionMaps,
  useGetTransitionRashiTable,
  useGetTransitionTime
} from '../../../../store/selectors';
import { getMaps } from '../../../../api/getMaps';
import { useAppDispatch } from '../../../../store/store';
import {
  setIsTransitionMapsActive, setIsTransitionRashiTableLoading, setTransitionDate,
  setTransitionMaps, setTransitionRashiTable,
  setTransitionTime
} from '../../../../store/reducers/transitionReduser';
import AppLoader from '../../../../components/appLoader/AppLoader';
import MainDashiTable from '../../components/mainDashiTable/MainDashiTable';
import RashiTable from '../../../../components/rashiTable/RashiTable';
import HoroscopesLoader from '../../components/horoscopeLoader/HoroscopesLoader';
import { getRashiTable } from '../../../../api/getRashiTable';
import { RashiTableParts } from '../../../../models/types/RashiTable';

const TransitionDate = () => {
  const {
    latitude,
    longitude,
    time,
    userName,
    date,
    hours,
    greenwich,
    minutes
  } = useGetHoroscopeUserInfo();
  const dispatch = useAppDispatch();
  const transitionMaps = useGetTransitionMaps();
  const isTransitionMapsActive = useGetIsTransitionMapsActive();
  const [isLoading, setIsLoading] = useState(false);
  const transitionDate = useGetTransitionDate();
  const transitionTime = useGetTransitionTime();

  const onTransitionTimeChange = useCallback((value: string) => {
    dispatch(setTransitionTime(value));
  }, []);

  const onTransitionDateChange = useCallback((value: string) => {
    dispatch(setTransitionDate(value));
  }, []);

  const rashiTable = useGetTransitionRashiTable();
  const isRashiTableLoading = useGetTransitionIsRashiTableLoading();
  const targetMapValue = useGetTargetMapValue();

  const table = useMemo(() => {
    return rashiTable.find((rashiTableItem) => rashiTableItem.tableName === targetMapValue)?.table as RashiTableParts;
  }, [rashiTable, targetMapValue]);

  const onCountClick = useCallback(() => {
    setIsLoading(true);

    getMaps({
      latitude,
      longitude,
      time: transitionTime,
      userName,
      date: transitionDate,
      hours,
      greenwich,
      minutes
    }).then((maps) => {
      dispatch(setTransitionMaps(maps));
    }).finally(() => {
      setIsLoading(false);
    });

    dispatch(setIsTransitionRashiTableLoading(true));

    getRashiTable({
      latitude,
      longitude,
      time: transitionTime,
      userName,
      date: transitionDate,
      hours,
      greenwich,
      minutes
    }).then((rashiTable) => {
      dispatch(setTransitionRashiTable(rashiTable));
    }).finally(() => {
      dispatch(setIsTransitionRashiTableLoading(false));
    });
  }, [latitude, longitude, time, userName, date, hours, greenwich, minutes, transitionDate, transitionTime]);

  useEffect(() => {
    const date = new Date();

    const seconds = '00';
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const year = String(date.getFullYear()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    dispatch(setTransitionDate(`${day}.${month}.${year}`));
    dispatch(setTransitionTime(`${hours}:${minutes}:${seconds}`));
  }, []);

  const toggleIsTransitionMapsActive = useCallback(() => {
    dispatch(setIsTransitionMapsActive(!isTransitionMapsActive));
  }, [isTransitionMapsActive]);

  useEffect(() => {
    return () => {
      dispatch(setIsTransitionMapsActive(false));
    };
  }, []);

  return (
    <>
      <AppLoader isLoading={isLoading}/>
      <Grid item container justifyContent={'space-between'} pl={2} pr={2}>
        <Grid item width={'calc(50% - 5px)'}>
          <Input placeholder={'Дата транзита'} inputType={InputType.date} value={transitionDate} onChange={onTransitionDateChange}/>
        </Grid>
        <Grid item width={'calc(50% - 5px)'}>
          <Input placeholder={'Время транзита'} inputType={InputType.time} value={transitionTime} onChange={onTransitionTimeChange}/>
        </Grid>
      </Grid>
      {!!transitionMaps.length && <Grid pt={3} pl={2} pr={2}>
        <Button
          onClick={toggleIsTransitionMapsActive}
          type={ButtonType.outline}
          text={!isTransitionMapsActive ? 'Добавить натальную карту' : 'Отключить натальную карту'}
        />
      </Grid>}
      <Grid pt={2} pb={2} onClick={onCountClick} pl={2} pr={2}>
        <Button type={ButtonType.gradient} text={'Рассчитать'}/>
      </Grid>
      {!!transitionMaps.length && (
        <>
          {!isRashiTableLoading && <RashiTable table={table} />}
          {isRashiTableLoading && <HoroscopesLoader />}
          <MainDashiTable />
        </>
      )}
    </>
  );
};

export default TransitionDate;
