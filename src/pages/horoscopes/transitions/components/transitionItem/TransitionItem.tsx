import React, { useEffect, useState } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import plus from './assets/plus.svg';
import minus from './assets/minus.svg';
import Input from '../../../../../components/input/Input';
import classNames from 'classnames';
import styles from './TransitionItem.module.scss';
import Options from '../../../../../components/options/Options';
import Slider from '../../../../../components/slider/Slider';
import { InputType } from '../../../../../components/input/InputType';
import { planets } from '../../helpers/planets';
import { constellationOptions } from '../../helpers/constellationOptions';
import { Option } from '../../../../../models/types/Option';

const planetMovingOptions = [
  {
    label: 'Все варианты',
    value: 'D/R/S'
  },
  {
    label: 'Директное',
    value: 'D'
  },
  {
    label: 'Ретроградное',
    value: 'R'
  },
  {
    label: 'Стационарность',
    value: 'S'
  }
];

interface TransitionItemProps {
  label: string,
  setPlanet: (props?: any) => any,
  setConstellation: (props?: any) => any,
  setRangeValue: (props: number []) => any,
  rangeValue: number [],
  setDirection: (props: Option) => any,
  direction: string,
  isOpen: boolean,
  setIsOpen: (isOpen: boolean) => any
}

const TransitionItem = ({ label, setPlanet, setConstellation, setRangeValue, rangeValue, setDirection, direction, isOpen, setIsOpen }: TransitionItemProps) => {
  const toggleIsOpen = () => {
    if (!setIsOpen) {
      return;
    }

    setIsOpen(!isOpen);
  };

  const handleChange = (event: Event, newValue: number | number[]) => {
    setRangeValue(newValue as number[]);
  };

  useEffect(() => {
    setDirection(planetMovingOptions[0]);
  }, []);

  return (
    <Box pt={2}>
      <section onClick={toggleIsOpen} className={styles.label}>
        <Box width={'30px'} height={'30px'} pr={2}>
          {isOpen && <img alt='minus' src={minus} width={'30px'} height={'30px'}/>}
          {!isOpen && <img alt='plus' src={plus} width={'30px'} height={'30px'}/>}
        </Box>
        <p className={classNames({ [styles.textOpened]: isOpen }, { [styles.textClosed]: !isOpen })}>
          {label}
        </p>
      </section>
      {isOpen && <Grid container direction={'column'}>
        <Grid pt={2} item container direction={'row'} justifyContent={'space-between'}>
          <Grid item width={'calc(50% - 5px)'}>
            <Input placeholder={'Планета'} options={planets} setTargetOption={setPlanet} inputType={InputType.options}/>
          </Grid>
          <Grid item width={'calc(50% - 5px)'}>
            <Input placeholder={'Созвездие'} options={constellationOptions} setTargetOption={setConstellation} inputType={InputType.options}/>
          </Grid>
        </Grid>
        <Grid item pt={2}>
          <Typography font-family={'Gilroy'} fontStyle={'normal'} fontWeight={600} color={'white'} fontSize={'14px'}>
            Движение планеты
          </Typography>
          <Options options={planetMovingOptions} value={direction} setValue={setDirection} />
        </Grid>
        <Grid item pt={2}>
          <Typography font-family={'Gilroy'} fontStyle={'normal'} fontWeight={600} color={'white'} fontSize={'14px'}>
            Положение планеты в градусе
          </Typography>
          <Slider max={30} value={rangeValue} onChange={handleChange} disableSwap valueLabelDisplay="on"/>
        </Grid>
      </Grid>}
    </Box>
  );
};

export default TransitionItem;
