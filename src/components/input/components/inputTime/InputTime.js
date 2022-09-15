/* eslint-disable */
import React, { useMemo, useState } from 'react';
import InputMask from 'react-input-mask';
import {Box, ClickAwayListener, Grid, TextField} from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import ruLocale from 'date-fns/locale/ru';
import moment from 'moment';
import { StaticTimePicker } from '@mui/x-date-pickers';
import Modal from "../../../modal/Modal";
import {StaticDatePicker} from "@mui/x-date-pickers/StaticDatePicker";
import timePickerImage from "./timePicker.svg";

// eslint-disable-next-line react/prop-types
const InputTime = ({ value, onChange, onFocus, shouldDisableTime, ...props }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onDateChange = (date) => {
    const formattedDate = moment(date).format('HH:mm');

    onChange(formattedDate);
  };

  const onInputFocus = () => {
    setIsOpen(true);

    if (onFocus) {
      onFocus();
    }
  };

  const onClickAway = () => {
    setIsOpen(false);
  };

  const timePickerValue = useMemo(() => {
    if (!value || !value.includes(':') || value?.split(':')?.length < 2) {
      return null;
    }

    const [hour, minutes] = value.split(':');
    return new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(), hour, minutes);
  }, [value]);

  return (
    <>
      <Grid container display={'flex'} alignItems={'center'}>
        <Grid item flex={1}>
          <InputMask
            onChange={(event) => onChange(event.target.value)}
            mask="99:99"
            value={value}
            {...props}
            autoComplete="new-password"
          />
        </Grid>
        <Grid item pr={'15px'} pl={'5px'}>
          <img src={timePickerImage} onClick={() => setIsOpen(true)}/>
        </Grid>
      </Grid>
      <Modal isOpen={isOpen} close={() => setIsOpen(false)} height={'280px'}>
        <ClickAwayListener onClickAway={onClickAway}>
          <Box pl={2} pr={2} pt={3}>
            <LocalizationProvider
              dateAdapter={AdapterDateFns}
              adapterLocale={ruLocale} // use 'bg' locale for date parser/formatter
            >
              <StaticTimePicker
                sx={{background: '#f0f0f3'}}
                displayStaticWrapperAs="desktop"
                onChange={(date) => onDateChange(date)}
                value={timePickerValue}
                openTo={'hours'}
                shouldDisableTime={shouldDisableTime}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </Box>
        </ClickAwayListener>
      </Modal>
    </>
  );
};

export default InputTime;
