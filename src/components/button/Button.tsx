import React, { useCallback } from 'react';
import styles from './Button.module.scss';
import { ButtonProps, ButtonType } from './ButtonProps';
import classNames from 'classnames';
import { Typography } from '@mui/material';

const Button = ({ text, onClick, type, isDisabled }: ButtonProps) => {
  const onButtonClick = useCallback(() => {
    if (isDisabled) {
      return;
    }

    if (onClick) {
      onClick();
    }
  }, [isDisabled, onClick]);

  return (
    <div
      className={
        classNames(
          styles.button,
          { [styles.gradientButton]: ButtonType.outline !== type },
          { [styles.outlineButton]: ButtonType.outline === type },
          { [styles.isDisabled]: isDisabled }
        )
      }
      onClick={onButtonClick}
    >
      <div>
        <Typography color={'white'} fontFamily={'Gilroy'} fontSize={'16px'}>
          {text}
        </Typography>
      </div>
      {ButtonType.outline !== type && !isDisabled && <div className={styles.blur}/>}
    </div>
  );
};

export default Button;
