import React, { useCallback } from 'react';
import { OptionsProps } from './OptionsProps';
import { Grid, GridWrap, Typography } from '@mui/material';
import { Option } from '../../helpers/Option';
import styles from './Options.module.scss';
import classNames from 'classnames';

const Options = ({ options, value, setValue, isScrollable, isOutlined, limit }: OptionsProps) => {
  const onSetValueClick = useCallback((option: Option) => {
    if (!setValue) {
      return;
    }

    if (!Array.isArray(value)) {
      setValue(option);
      return;
    }

    if (value.find((_option) => _option.value === option.value)) {
      setValue(value.filter((value) => value.value !== option.value));
      return;
    }

    if (limit && limit <= value.length) {
      return;
    }

    setValue([
      ...value,
      option
    ]);
  }, [setValue, value]);

  const isTargetValue = useCallback((targetValue: any) => {
    if (!Array.isArray(value)) {
      return value === targetValue;
    }

    return value.find((option) => option.value === targetValue);
  }, [value]);

  return (
    <div className={classNames({ [styles.scrollable]: isScrollable })}>
      <Grid container wrap={classNames({ nowrap: isScrollable, wrap: !isScrollable }) as GridWrap}>
        {options?.map(({ value: targetValue, label }: Option) => (
          <Grid
            key={targetValue}
            className={classNames(
              styles.option,
              {
                [styles.target]: isTargetValue(targetValue) && !isOutlined,
                [styles.outlined]: isOutlined,
                [styles.targetOutlined]: isTargetValue(targetValue) && isOutlined,
                [styles.filled]: !isOutlined
              })
            }
            mr={1}
            mt={1}
            onClick={() => onSetValueClick({ value: targetValue, label })}
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
