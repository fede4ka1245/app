import React, { useCallback, useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import Input from '../../../../components/input/Input';
import { InputType } from '../../../../components/input/InputType';
import Button from '../../../../components/button/Button';
import { ButtonType } from '../../../../components/button/ButtonProps';
import {
  useGetHoroscopeUserInfo,
  useGetIsTransitionMapsActive, useGetTransitionDate,
  useGetTransitionMaps, useGetTransitionTime
} from '../../../../store/selectors';
import { getMaps } from '../../../../api/getMaps';
import { useAppDispatch } from '../../../../store/store';
import {
  setIsTransitionMapsActive, setTransitionDate,
  setTransitionMaps,
  setTransitionTime
} from '../../../../store/reducers/transitionReduser';
import AppLoader from '../../../../components/appLoader/AppLoader';

const TransitionDate = () => {
  const { latitude, longitude, time, userName, date, hours, greenwich, minutes } = useGetHoroscopeUserInfo();
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

  const onCountClick = useCallback(() => {
    setIsLoading(true);

    getMaps({
      latitude, longitude, time: transitionTime, userName, date: transitionDate, hours, greenwich, minutes
    }).then((maps) => {
      dispatch(setTransitionMaps(maps));
    }).finally(() => {
      setIsLoading(false);
    });
  }, [latitude, longitude, time, userName, date, hours, greenwich, minutes, transitionDate, transitionTime]);

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
      <Grid item container justifyContent={'space-between'}>
        <Grid item width={'calc(50% - 5px)'}>
          <Input placeholder={'Дата транзита'} inputType={InputType.date} value={transitionDate} onChange={onTransitionDateChange}/>
        </Grid>
        <Grid item width={'calc(50% - 5px)'}>
          <Input placeholder={'Время транзита'} inputType={InputType.time} value={transitionTime} onChange={onTransitionTimeChange}/>
        </Grid>
      </Grid>
      {!!transitionMaps.length && <Grid pt={3}>
        <Button
          onClick={toggleIsTransitionMapsActive}
          type={ButtonType.outline}
          text={!isTransitionMapsActive ? 'Добавить натальную карту' : 'Отключить натальную карту'}
        />
      </Grid>}
      <Grid pt={2} pb={2} onClick={onCountClick}>
        <Button type={ButtonType.gradient} text={'Рассчитать'}/>
      </Grid>
    </>
  );
};

export default TransitionDate;
