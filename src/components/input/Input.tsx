import React, { ForwardedRef, useCallback, useEffect, useState } from 'react';
import styles from './Input.module.scss';
import { InputProps } from './InputProps';
import classNames from 'classnames';
import { InputStyle } from './InputStyle';
import { Option } from '../../models/types/Option';
import Options from './components/options/Options';
import { InputType } from './InputType';
import InputDate from './components/inputDate/InputDate';
import InputTime from './components/inputTime/InputTime';
import InputPhone from './components/inputPhone/InputPhone';
import { Grid } from '@mui/material';
import arrowImage from './assets/arrow.svg';
import InputOptions from './components/inputOptions/InputOptions';
import Modal from '../modal/Modal';
// @ts-ignore
import InputMask from 'react-input-mask';

const Input = (props : InputProps, ref: ForwardedRef<any>) => {
  const { placeholder, inputType, onChange, value, setTargetOption, targetOption, options, disablePast, shouldDisableTime, inputStyle, width, height, disabled } = props;
  const [isFocused, setIsFocused] = useState(false);
  const [inputLabel, setInputLabel] = useState(value);
  const [isOptionsActive, setIsOptionsActive] = useState(false);
  const [option, setOption] = useState(targetOption);

  const [isOptionsInputOpen, setIsOptionsInputOpen] = useState(false);

  const toggleIsOptionsInputOpen = useCallback(() => {
    setIsOptionsInputOpen(!isOptionsInputOpen);
  }, [isOptionsInputOpen]);

  const toggleIsOptionActive = () => {
    if (inputType === InputType.optionsInput && !isOptionsInputOpen) {
      toggleIsOptionsInputOpen();
      return;
    }

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

  useEffect(() => {
    if (!inputLabel) {
      setInputLabel(value);
    }
  }, [value]);

  const onInputChange = (value: string) => {
    if (onChange) {
      onChange(value);
    }
    setInputLabel(value);
  };

  const isBottom = () => {
    if (value) {
      return false;
    }

    if (inputType === InputType.options || inputType === InputType.optionsInput) {
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
        { [styles.outlined]: inputStyle === InputStyle.outlined && isBottom() },
        { [styles.disabled]: disabled }
      )}
      style={{ width, height }}
    >
      {inputType === InputType.optionsInput && <>
        <Modal isOpen={isOptionsInputOpen} close={toggleIsOptionsInputOpen} height={'calc(100% - 60px)'}>
          <InputOptions
            options={options}
            onChange={onChange}
            setTargetOption={onOptionSet}
            close={toggleIsOptionsInputOpen}
            placeholder={placeholder}
          />
        </Modal>
      </>}
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
      {inputType === InputType.coordinates && <InputMask
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => onInputChange(event.target.value)}
        mask="99.999999"
        type="tel"
        value={value}
      />}
      {!inputType && <input
        onChange={(event) => onInputChange(event.target.value)}
        value={value}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        ref={ref}
        autoComplete="new-password"
      />}
      {(inputType === InputType.options || inputType === InputType.optionsInput) && (<>
        <Grid container display={'flex'} alignItems={'center'} wrap={'nowrap'}>
          <Grid item flex={1}>
            <input disabled value={targetOption ? targetOption.label : option?.label}/>
          </Grid>
          <Grid item pl={'5px'} pr={'18px'}>
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

export default React.forwardRef(Input);
