import React from 'react';
import { OptionsProps } from './OptionsProps';
import { Grid, GridWrap, Typography } from '@mui/material';
import { Option } from '../../helpers/Option';
import styles from './Options.module.scss';
import classNames from 'classnames';

const Options = ({ options, value, setValue, isScrollable, isOutlined }: OptionsProps) => {
  return (
    <div className={classNames({ [styles.scrollable]: isScrollable })}>
      <Grid container wrap={classNames({ nowrap: isScrollable, wrap: !isScrollable }) as GridWrap}>
        {options.map(({ value: targetValue, label }: Option) => (
          <Grid
            key={targetValue}
            className={classNames(
              styles.option,
              {
                [styles.target]: value === targetValue && !isOutlined,
                [styles.outlined]: isOutlined,
                [styles.targetOutlined]: value === targetValue && isOutlined,
                [styles.filled]: !isOutlined
              })
            }
            mr={1}
            mt={1}
            onClick={() => setValue({ value: targetValue, label })}
          >
            <Typography whiteSpace={'nowrap'} lineHeight={'16px'} fontWeight={300} fontFamily={'Gilroy'} fontStyle={'normal'} fontSize={'11px'}>
              {label}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Options;
