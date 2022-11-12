import React, { useCallback, useMemo, useState } from 'react';
import { Grid, Typography } from '@mui/material';
import Input from '../../../../components/input/Input';
import { InputType } from '../../../../components/input/InputType';
import TransitionItem from '../components/transitionItem/TransitionItem';
import Button from '../../../../components/button/Button';
import { ButtonType } from '../../../../components/button/ButtonProps';
import { getGochara } from '../../../../api/getGochara';
import { useGetHoroscopeUserInfo } from '../../../../store/selectors';
import { Option } from '../../../../models/types/Option';
import HoroscopesLoader from '../../components/horoscopeLoader/HoroscopesLoader';
import TransitionTable from '../components/transitionTable/TransitionTable';
import { TransitionsTableRow } from '../../../../models/types/TransitionsTableRow';
import Options from '../../../../components/options/Options';

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

const conditionOptions = [
  {
    label: 'И',
    value: 'AND'
  },
  {
    label: 'Или',
    value: 'OR'
  }
];

const TransitionSearch = () => {
  const { latitude, longitude, time, userName, date, hours, greenwich, minutes } = useGetHoroscopeUserInfo();
  const [firstTransit, setFirstTransit] = useState({
    planet: '',
    constellation: '',
    direction: '',
    min: 0,
    max: 30
  });
  const [secondTransit, setSecondTransit] = useState({
    planet: '',
    constellation: '',
    direction: '',
    min: 0,
    max: 30
  });
  const [dateStart, setDateStart] = useState<string>();
  const [dateEnd, setEndStart] = useState<string>();
  const [transitionTable, setTransitionTable] = useState<TransitionsTableRow []>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentIgnoredOptions, setCurrentIgnoredOptions] = useState<Option []>([]);
  const [condition, setCondition] = useState(conditionOptions[0]);
  const [isFirstOpen, setIsFirstOpen] = useState(false);
  const [isSecondOpen, setIsSecondOpen] = useState(false);

  const isMovementMerge = useMemo(() => {
    return !!currentIgnoredOptions.find((item) => item.value === 'planet');
  }, [currentIgnoredOptions]);

  const isRasiMerge = useMemo(() => {
    return !!currentIgnoredOptions.find((item) => item.value === 'newSign');
  }, [currentIgnoredOptions]);

  const setFirstDirection = useCallback((direction: Option) => {
    setFirstTransit({
      ...firstTransit,
      direction: direction.value
    });
  }, [firstTransit]);

  const setSecondDirection = useCallback((direction: Option) => {
    setSecondTransit({
      ...secondTransit,
      direction: direction.value
    });
  }, [secondTransit]);

  const setFirstRange = useCallback(([min, max]: number []) => {
    setFirstTransit({
      ...secondTransit,
      min,
      max
    });
  }, [firstTransit]);

  const setSecondRange = useCallback(([min, max]: number []) => {
    setSecondTransit({
      ...secondTransit,
      min,
      max
    });
  }, [secondTransit]);

  const setFirstPlanet = useCallback((planet: Option) => {
    setFirstTransit({
      ...firstTransit,
      planet: planet.value
    });
  }, [firstTransit]);

  const setFirstConstellation = useCallback((constellation: Option) => {
    setFirstTransit({
      ...firstTransit,
      constellation: constellation.value
    });
  }, [firstTransit]);

  const setSecondPlanet = useCallback((planet: Option) => {
    setSecondTransit({
      ...secondTransit,
      planet: planet.value
    });
  }, [secondTransit]);

  const setSecondConstellation = useCallback((constellation: Option) => {
    setSecondTransit({
      ...secondTransit,
      constellation: constellation.value
    });
  }, [secondTransit]);

  const onCountClick = useCallback(() => {
    if (!dateStart || !dateEnd) {
      return;
    }

    setIsLoading(true);

    getGochara({
      latitude,
      longitude,
      time,
      userName,
      date,
      hours,
      greenwich,
      minutes,
      dateStart,
      dateEnd,
      planet1: firstTransit.planet,
      constellation1: firstTransit.constellation,
      direction1: firstTransit.direction,
      planet2: isSecondOpen ? secondTransit.planet : undefined,
      constellation2: isSecondOpen ? secondTransit.constellation : undefined,
      direction2: isSecondOpen ? secondTransit.direction : undefined,
      isRasiMerge,
      isMovementMerge,
      condition: condition.value,
      firstRange: [firstTransit.min, firstTransit.max],
      secondRange: [isSecondOpen ? secondTransit.min : null, isSecondOpen ? secondTransit.max : null]
    }).then((table) => {
      setTransitionTable(table);
    }).finally(() => {
      setIsLoading(false);
    });
    setTimeout(() => {
      window.scrollTo(0, document.body.scrollHeight);
    }, 100);
  }, [isRasiMerge, isSecondOpen, condition, isMovementMerge, latitude, longitude, time, userName, date, hours, greenwich, minutes, firstTransit, secondTransit, dateStart, dateEnd]);

  return (
    <>
      <Grid pl={2} pr={2} overflow={'hidden'}>
        <Grid item container justifyContent={'space-between'}>
          <Grid item width={'calc(50% - 5px)'}>
            <Input placeholder={'Начальная дата'} inputType={InputType.date} value={dateStart} onChange={setDateStart} />
          </Grid>
          <Grid item width={'calc(50% - 5px)'}>
            <Input placeholder={'Конечная дата'} inputType={InputType.date} value={dateEnd} onChange={setEndStart} />
          </Grid>
        </Grid>
        <Grid item pt={2} pb={2}>
          <Typography font-family={'Gilroy'} fontStyle={'normal'} fontWeight={600} color={'white'} fontSize={'16px'}>
            Игнорировать
          </Typography>
          <Options options={ignoredOptions} value={currentIgnoredOptions} setValue={setCurrentIgnoredOptions} />
        </Grid>
        <Grid item pt={2}>
          <Typography font-family={'Gilroy'} fontStyle={'normal'} fontWeight={600} color={'white'} fontSize={'16px'}>
            Условие
          </Typography>
          <Options options={conditionOptions} value={condition?.value} setValue={setCondition} />
        </Grid>
        <Grid item pt={1}>
          <TransitionItem
            setPlanet={setFirstPlanet}
            setConstellation={setFirstConstellation}
            label={'Транзит планеты 1'}
            setRangeValue={setFirstRange}
            rangeValue={[firstTransit.min, firstTransit.max]}
            setDirection={setFirstDirection}
            direction={firstTransit.direction}
            isOpen={isFirstOpen}
            setIsOpen={setIsFirstOpen}
          />
        </Grid>
        <Grid item pt={1}>
          <TransitionItem
            setPlanet={setSecondPlanet}
            setConstellation={setSecondConstellation}
            label={'Транзит планеты 2'}
            setRangeValue={setSecondRange}
            rangeValue={[secondTransit.min, secondTransit.max]}
            setDirection={setSecondDirection}
            direction={secondTransit.direction}
            isOpen={isSecondOpen}
            setIsOpen={setIsSecondOpen}
          />
        </Grid>
        <Grid pt={3} pb={2}>
          <Button onClick={onCountClick} type={ButtonType.gradient} text={'Рассчитать'}/>
        </Grid>
      </Grid>
      {isLoading && <HoroscopesLoader />}
      {!isLoading && !!transitionTable.length && (
        <TransitionTable rows={transitionTable} />
      )}
    </>
  );
};

export default TransitionSearch;
