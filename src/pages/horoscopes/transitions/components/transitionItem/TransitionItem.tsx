import React, { useState } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import plus from './assets/plus.svg';
import minus from './assets/minus.svg';
import Input from '../../../../../components/input/Input';
import classNames from 'classnames';
import styles from './TransitionItem.module.scss';
import Options from '../../../../../components/options/Options';
import { Option } from '../../../../../helpers/Option';

const ignoredOptions = [
  {
    label: 'Переход планеты в новый знак',
    value: 'newSign'
  },
  {
    label: 'Характер движения планеты',
    value: 'planet'
  }
];

const planetMovingOptions = [
  {
    label: 'Директное',
    value: 'direct'
  },
  {
    label: 'Ретроградное',
    value: 'retro'
  },
  {
    label: 'Стационарность',
    value: 'stationary'
  }
];

const TransitionItem = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [ignoredOption, setIgnoredOption] = useState<Option>();
  const [planetMovingOption, setPlanetMovingOption] = useState<Option>();

  const toggleIsOpen = () => {
    if (!setIsOpen) {
      return;
    }

    setIsOpen(!isOpen);
  };

  return (
    <Grid container direction={'row'} pt={2}>
      <section onClick={toggleIsOpen} className={styles.label}>
        <Box width={'30px'} height={'30px'} pr={2}>
          {isOpen && <img alt='minus' src={minus} width={'30px'} height={'30px'}/>}
          {!isOpen && <img alt='plus' src={plus} width={'30px'} height={'30px'}/>}
        </Box>
        <p className={classNames({ [styles.textOpened]: isOpen }, { [styles.textClosed]: !isOpen })}>
          Транзит планеты 1
        </p>
      </section>
      {isOpen && <Grid container>
        <Grid pt={2} item container direction={'row'} justifyContent={'space-between'} rowSpacing={2}>
          <Grid item width={'calc(50% - 5px)'}>
            <Input placeholder={'00.00.00'}/>
          </Grid>
          <Grid item width={'calc(50% - 5px)'}>
            <Input placeholder={'00.00.00'}/>
          </Grid>
          <Grid item width={'calc(50% - 5px)'}>
            <Input placeholder={'Планета'} isSelect={true}/>
          </Grid>
          <Grid item width={'calc(50% - 5px)'}>
            <Input placeholder={'Созвездие'} isSelect={true}/>
          </Grid>
        </Grid>
        <Grid item pt={2}>
          <Typography font-family={'Gilroy'} fontStyle={'normal'} fontWeight={600} color={'white'} fontSize={'14px'}>
            Игнорировать
          </Typography>
          <Options options={ignoredOptions} value={ignoredOption?.value} setValue={setIgnoredOption} />
        </Grid>
        <Grid item pt={2}>
          <Typography font-family={'Gilroy'} fontStyle={'normal'} fontWeight={600} color={'white'} fontSize={'14px'}>
            Движение планеты
          </Typography>
          <Options options={planetMovingOptions} value={planetMovingOption?.value} setValue={setPlanetMovingOption} />
        </Grid>
        {/* <Grid item pt={2}> */}
        {/*  <Typography font-family={'Gilroy'} fontStyle={'normal'} fontWeight={600} color={'white'} fontSize={'14px'}> */}
        {/*    Положение планеты в градусе */}
        {/*  </Typography> */}
        {/* </Grid> */}
      </Grid>}
    </Grid>
  );
};

export default TransitionItem;
