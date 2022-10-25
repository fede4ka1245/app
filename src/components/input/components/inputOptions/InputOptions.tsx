import React, { useEffect, useRef, useState } from 'react';
import { Grid } from '@mui/material';
import { Option } from '../../../../models/types/Option';
import Input from '../../Input';
import styles from './InputOptions.module.scss';
import { InputStyle } from '../../InputStyle';

export type InputOptionsProps = {
  placeholder?: string,
  onChange?: (value: string) => any,
  value?: string,
  options?: Array<Option>
  setTargetOption?: Function,
  close?: (props?: any) => any,
}

const InputOptions = ({ options, onChange, placeholder, setTargetOption, close }: InputOptionsProps) => {
  const [value, setValue] = useState('');
  const inputRef = useRef<any>();

  useEffect(() => {
    setTimeout(() => {
      if (inputRef.current.focus) {
        inputRef.current.focus();
      }
    }, 200);
  }, []);

  const onOptionClick = ({ label, value }: Option) => {
    if (setTargetOption) {
      setTargetOption({ label, value });
    }

    if (close) {
      close();
    }
  };

  const onInputChange = (value: string) => {
    setValue(value);

    if (onChange) {
      onChange(value);
    }
  };

  return (
    <>
      <Grid item p={2}>
        <Input
          value={value}
          onChange={onInputChange}
          ref={inputRef}
          placeholder={placeholder}
          inputStyle={InputStyle.outlined}
        />
      </Grid>
      <Grid container direction={'column'} overflow={'scroll'} wrap={'nowrap'}>
        {options?.map(({ label, value }) => (
          <Grid item key={label}>
            <section className={styles.option} onClick={() => onOptionClick({ label, value })}>
              {label}
            </section>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default InputOptions;
