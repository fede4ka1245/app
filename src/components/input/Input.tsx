import React, { useState } from 'react';
import styles from './Input.module.scss';
import { InputProps } from './InputProps';
import classNames from 'classnames';
import { InputType } from './InputType';

const Input = ({ placeholder, inputType, onChange, value } : InputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState(value);

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event);
    }
    setInputValue(event?.target?.value);
  };

  const isBottom = () => {
    return !(isFocused || inputValue);
  };

  const onInputFocus = () => {
    setIsFocused(true);
  };

  const onInputBlur = () => {
    setIsFocused(false);
  };

  return (
    <section className={
      classNames(
        styles.input,
        { [styles.filled]: inputType !== InputType.outlined || !isBottom() },
        { [styles.outlined]: inputType === InputType.outlined && isBottom() }
      )}
    >
      <input onFocus={onInputFocus} onBlur={onInputBlur} value={inputValue} onChange={onInputChange}/>
      <label className={classNames(styles.placeholder, { [styles.bottom]: isBottom() }, { [styles.top]: !isBottom() })}>
        {placeholder}
      </label>
    </section>
  );
};

export default Input;
