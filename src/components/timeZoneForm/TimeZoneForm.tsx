import React, { useCallback, useEffect, useMemo } from 'react';
import { Grid } from '@mui/material';
import Input from '../input/Input';
import { InputType } from '../input/InputType';
import { Option } from '../../models/types/Option';

interface TimeZoneFormProps {
  hours?: string,
  setHours?: (props: any) => any,
  minutes?: string,
  setMinutes?: (props: any) => any,
  greenwich?: string,
  setGreenwich?: (props: any) => any
}

const getHoursOptions = (): Option [] => {
  return [...Array.from({ length: 14 }).map((_, index) => ({
    value: index,
    label: index >= 10 ? index : `0${index}`
  }))];
};

const getMinutesOptions = (): Option [] => {
  return [...Array.from({ length: 60 }).map((_, index) => ({
    value: index,
    label: index >= 10 ? index : `0${index}`
  }))];
};

const getGreenwichOptions = (): Option [] => {
  return [
    {
      value: 'Восток',
      label: 'Восток'
    },
    {
      value: 'Запад',
      label: 'Запад'
    }
  ];
};

const TimeZoneForm = ({ hours, setHours, minutes, setMinutes, greenwich, setGreenwich }: TimeZoneFormProps) => {
  const hoursOptions = useMemo(() => {
    return getHoursOptions();
  }, []);

  const minutesOptions = useMemo(() => {
    return getMinutesOptions();
  }, []);

  const greenwichOptions = useMemo(() => {
    return getGreenwichOptions();
  }, []);

  const hoursTargetOption = useMemo(() => {
    return hoursOptions.find(({ label }: Option) => label === hours);
  }, [hoursOptions, hours]);

  const minutesTargetOption = useMemo(() => {
    return minutesOptions.find(({ label }: Option) => label === minutes);
  }, [minutesOptions, minutes]);

  const greenwichTargetOption = useMemo(() => {
    return greenwichOptions.find(({ label }: Option) => label === greenwich);
  }, [greenwichOptions, greenwich]);

  const onHoursSet = useCallback((option: Option) => {
    if (!setHours) {
      return;
    }

    setHours(option.label);
  }, [setHours]);

  const onMinutesSet = useCallback((option: Option) => {
    if (!setMinutes) {
      return;
    }

    setMinutes(option.label);
  }, [setMinutes]);

  const onGreenwichSet = useCallback((option: Option) => {
    if (!setGreenwich) {
      return;
    }

    setGreenwich(option.label);
  }, [setGreenwich]);

  useEffect(() => {
    if (setGreenwich && !greenwich) {
      setGreenwich(getGreenwichOptions()[0].value);
    }
  }, [setGreenwich]);

  return (
    <>
      <Grid item width={'calc(50% - 8px)'}>
        <Input placeholder='Гринвич' inputType={InputType.options} setTargetOption={onGreenwichSet} targetOption={greenwichTargetOption} options={greenwichOptions}/>
      </Grid>
      <Grid item flex={1} pl={2}>
        <Input placeholder='Час' inputType={InputType.options} setTargetOption={onHoursSet} targetOption={hoursTargetOption} options={hoursOptions}/>
      </Grid>
      <Grid item flex={1} pl={2}>
        <Input placeholder='Мин.' inputType={InputType.options} setTargetOption={onMinutesSet} targetOption={minutesTargetOption} options={minutesOptions}/>
      </Grid>
    </>
  );
};

export default TimeZoneForm;
