/* eslint-disable */
import React, { useMemo, useState } from 'react';
import InputMask from 'react-input-mask';
import {Box, ClickAwayListener, TextField, Grid} from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import moment from 'moment';
import Modal from "../../../modal/Modal";
import datePickerImage from './datePicker.svg';

const InputDate = ({ value, onChange, onFocus, disablePast, ...props }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onDateChange = (date) => {
    const formattedDate = moment(date).format('DD.MM.YYYY');

    onChange(formattedDate);
    setIsOpen(false);
  };

  const onClickAway = () => {
    setIsOpen(false);
  };

  const dataPickerValue = useMemo(() => {
    if (!value || !value.includes('.') || value?.split('.')?.length < 3) {
      return null;
    }

    const [day, month, year] = value.split('.');
    return new Date(year, Number(month) - 1, day);
  }, [value]);

  const beforeMaskedValueChange = (newState, oldState, userInput) => {
    let { value: _value } = newState;
    let selection = newState.selection;
    let cursorPosition = selection ? selection.start : null;

    // keep minus if entered by user
    if (_value.endsWith('.') && userInput !== '.' && value.endsWith('.')) {
      if (cursorPosition === _value.length) {
        cursorPosition--;
        selection = { start: cursorPosition, end: cursorPosition };
      }
      _value = _value.slice(0, -1);
    }

    return {
      value: _value,
      selection
    };
  }

  return (
    <>
      <Grid container display={'flex'} alignItems={'center'} height={'100%'}>
        <Grid item flex={1} height={'100%'}>
          <InputMask
            onChange={(event) => onChange(event?.target?.value)}
            mask="99.99.9999"
            value={value}
            {...props}
            type="tel"
            beforeMaskedValueChange={beforeMaskedValueChange}
            maskChar={null}
          />
        </Grid>
        <Grid item pr={'15px'} pl={'5px'}>
          <img src={datePickerImage} onClick={() => setIsOpen(true)}/>
        </Grid>
      </Grid>
      <Modal isOpen={isOpen} close={() => setIsOpen(false)} height={'400px'}>
        <ClickAwayListener onClickAway={onClickAway}>
          <Box pl={2} pr={2} pt={3}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <StaticDatePicker
                displayStaticWrapperAs="desktop"
                onChange={(date) => onDateChange(date)}
                value={dataPickerValue}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </Box>
        </ClickAwayListener>
      </Modal>
    </>
  );
};

export default InputDate;
