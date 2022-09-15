import React from 'react';
import { Drawer } from '@mui/material';
import { OptionsProps } from './OptionsProps';
import { Option } from '../../../../helpers/Option';
import styles from './Options.module.scss';

const Options = ({ isOpen, setTargetOption, close, options }: OptionsProps) => {
  const onOptionClick = (option: Option) => {
    if (!setTargetOption) {
      return;
    }

    setTargetOption(option);
  };

  return (
    <Drawer
      anchor={'bottom'}
      open={isOpen}
      onClose={() => close()}
      PaperProps={{ style: { borderRadius: '20px 20px 0 0' } }}
    >
      <section className={styles.main}>
        {
          options?.map((option: Option, index) => (
            <div key={index} onClick={() => onOptionClick(option)}>
              {option.label}
            </div>
          ))
        }
      </section>
    </Drawer>
  );
};

export default Options;
