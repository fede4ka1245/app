import React from 'react';
import { OptionsProps } from './OptionsProps';
import { Grid, Typography } from '@mui/material';
import { Option } from '../../helpers/Option';
import styles from './Options.module.scss';
import classNames from 'classnames';

const Options = ({ options, value, setValue }: OptionsProps) => {
  return (
    <Grid container>
      {options.map(({ value: targetValue, label }: Option) => (
        <Grid
          key={targetValue}
          className={classNames(styles.option, { [styles.target]: value === targetValue })}
          mr={1}
          mt={1}
          onClick={() => setValue({ value: targetValue, label })}
        >
          <Typography lineHeight={'16px'} fontWeight={300} fontFamily={'Gilroy'} fontStyle={'normal'} fontSize={'11px'}>
            {label}
          </Typography>
        </Grid>
      ))}
    </Grid>
  );
};

export default Options;
