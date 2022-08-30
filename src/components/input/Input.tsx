import React, { useState } from 'react';
import styles from './Input.module.scss';
import { InputProps } from './InputProps';
import classNames from 'classnames';
import { InputType } from './InputType';
import { Option } from '../../helpers/Option';
import { Box, Typography } from '@mui/material';
import Options from './components/Options';
import arrow from './assets/arrow.svg';

const Input = ({ placeholder, inputType, onChange, value, setTargetOption, targetOption, options, isSelect } : InputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [inputLabel, setInputLabel] = useState(value);

  const [isOptionsActive, setIsOptionsActive] = useState(false);
  const [option, setOption] = useState(targetOption);

  const toggleIsOptionActive = () => {
    if (!isSelect) {
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

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event);
    }
    setInputLabel(event?.target?.value);
  };

  const isBottom = () => {
    if (isSelect) {
      return !option;
    }

    return !(isFocused || inputLabel);
  };

  const onInputFocus = () => {
    setIsFocused(true);
  };

  const onInputBlur = () => {
    setIsFocused(false);
  };

  return (
    <section
      onClick={toggleIsOptionActive}
      className={classNames(
        styles.input,
        { [styles.filled]: inputType !== InputType.outlined || !isBottom() },
        { [styles.outlined]: inputType === InputType.outlined && isBottom() }
      )}
    >
      {!isSelect && <input onFocus={onInputFocus} onBlur={onInputBlur} value={inputLabel} onChange={onInputChange}/>}
      {isSelect && <Typography fontFamily={'Gilroy'} fontWeight={500} fontSize={'16px'} pl={2}>
        {option?.label}
      </Typography>}
      {isSelect && <Box ml={'auto'} mr={2}>
        <img alt='arrow' src={arrow}/>
      </Box>}
      <label className={classNames(styles.placeholder, { [styles.bottom]: isBottom() }, { [styles.top]: !isBottom() })}>
        {placeholder}
      </label>
      <Options isOpen={isOptionsActive} setTargetOption={onOptionSet} close={toggleIsOptionActive} options={options}/>
    </section>
  );
};

export default Input;
