import React, { useState } from 'react';
import styles from './Input.module.scss';
import { InputProps } from './InputProps';
import classNames from 'classnames';
import { InputStyle } from './InputStyle';
import { Option } from '../../helpers/Option';
import Options from './components/options/Options';
import { InputType } from './InputType';
import InputDate from './components/inputDate/InputDate';
import InputTime from './components/inputTime/InputTime';
import InputPhone from './components/inputPhone/InputPhone';
import { Grid, Typography } from '@mui/material';
import arrowImage from './assets/arrow.svg';

const Input = ({ placeholder, inputType, onChange, value, setTargetOption, targetOption, options, isSelect, disablePast, shouldDisableTime, inputStyle, width, height } : InputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [inputLabel, setInputLabel] = useState(value);

  const [isOptionsActive, setIsOptionsActive] = useState(false);
  const [option, setOption] = useState(targetOption);

  const toggleIsOptionActive = () => {
    if (inputType !== InputType.options) {
      return;
    }

    if (isOptionsActive) {
      setIsOptionsActive(false);
    } else {
      setIsOptionsActive(true);
    }
  };

  const onOptionSet = (option: Option) => {
    setOption(option);

    if (!setTargetOption) {
      return;
    }

    setTargetOption(option);
  };

  const onInputChange = (value: string) => {
    if (onChange) {
      onChange(value);
    }
    setInputLabel(value);
  };

  const isBottom = () => {
    if (inputType === InputType.options) {
      return !option;
    }

    return !(isFocused || inputLabel);
  };

  return (
    <section
      onClick={toggleIsOptionActive}
      className={classNames(
        { [styles.textarea]: inputType === InputType.textarea },
        { [styles.input]: inputType !== InputType.textarea },
        { [styles.filled]: inputStyle !== InputStyle.outlined || !isBottom() },
        { [styles.outlined]: inputStyle === InputStyle.outlined && isBottom() }
      )}
      style={{ width, height }}
    >
      {inputType === InputType.date && <InputDate
        disablePast={disablePast}
        value={inputLabel}
        onChange={onInputChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={classNames(styles.input)}
      />}
      {inputType === InputType.time && <InputTime
        shouldDisableTime={shouldDisableTime}
        value={inputLabel}
        onChange={onInputChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={classNames(styles.input)}
      />}
      {inputType === InputType.phone && <InputPhone
        value={value}
        onChange={onInputChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={classNames(styles.input)}
      />}
      {inputType === InputType.textarea && <textarea
        value={value}
        onChange={(event) => onInputChange(event.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={classNames(styles.textarea)}
        autoComplete="new-password"
      />}
      {!inputType && <input
        onChange={(event) => onInputChange(event.target.value)}
        value={value}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        autoComplete="new-password"
      />}
      {inputType === InputType.options && (<>
        <Grid container display={'flex'} alignItems={'center'}>
          <Grid item>
            <Typography fontFamily={'Gilroy'} fontWeight={500} fontSize={'16px'} pl={2}>
              {option?.label}
            </Typography>
          </Grid>
          <Grid item ml={'auto'} pr={'18px'}>
            <img src={arrowImage}/>
          </Grid>
        </Grid>
        <Options isOpen={isOptionsActive} setTargetOption={onOptionSet} close={toggleIsOptionActive} options={options}/>
      </>)}
      <label className={classNames(styles.placeholder, { [styles.bottom]: isBottom() }, { [styles.top]: !isBottom() })}>
        {placeholder}
      </label>
    </section>
  );
};

export default Input;
