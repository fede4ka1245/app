import React, { useCallback, useMemo, useState, useEffect } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import Input from '../../../../components/input/Input';
import { InputType } from '../../../../components/input/InputType';
import TransitionItem from '../components/transitionItem/TransitionItem';
import Button from '../../../../components/button/Button';
import { ButtonType } from '../../../../components/button/ButtonProps';
import { getTransitions } from '../../../../api/getTransitions';
import {
  useGetIsTransitionTableLoading,
  useGetTargetPlanets,
  useGetTransitionParams,
  useGetTransitionTable
} from '../../../../store/selectors';
import { Option } from '../../../../models/types/Option';
import HoroscopesLoader from '../../components/horoscopeLoader/HoroscopesLoader';
import Options from '../../../../components/options/Options';
import { getTransitionsParams } from '../../../../api/getTransitionsParams';
import { useAppDispatch } from '../../../../store/store';
import {
  setIsTransitionTableLoading, setTargetPlanets,
  setTransitionParams,
  setTransitionTable
} from '../../../../store/reducers/transitionReduser';
import { TransitionsPlanet } from '../../../../models/types/transitions/transitionsPlanet';
import TransitionTable from '../components/transitionTable/TransitionTable';
import styles from '../components/transitionItem/TransitionItem.module.scss';
import plus from '../components/transitionItem/assets/plus.svg';
import { ignoredOptions, conditionOptions, planetMovingOptions } from '../helpers';

const TransitionSearch = () => {
  const dispatch = useAppDispatch();
  const [dateStart, setDateStart] = useState<string>();
  const [dateTo, setDateTo] = useState<string>();
  const [currentIgnoredOptions, setCurrentIgnoredOptions] = useState<Option []>([]);
  const [condition, setCondition] = useState(conditionOptions[0]);
  const [isLoading, setIsLoading] = useState(false);
  const { transitionsPlanetsParams, transitionsPositionsParams } = useGetTransitionParams();
  const [planets, setPlanets] = useState<TransitionsPlanet []>([
    {
      planet: 1,
      position: '',
      direction: planetMovingOptions[0].value,
      min: 0,
      max: 30
    }
  ]);
  const transitionTable = useGetTransitionTable();
  const isTransitionsTableLoading = useGetIsTransitionTableLoading();

  const isMovementMerge = useMemo(() => {
    return !!currentIgnoredOptions.find((item) => item.value === 'planet');
  }, [currentIgnoredOptions]);

  const isRasiMerge = useMemo(() => {
    return !!currentIgnoredOptions.find((item) => item.value === 'newSign');
  }, [currentIgnoredOptions]);

  const setPlanet = useCallback((planet: TransitionsPlanet, index: number) => {
    const newPlanetes = [...planets];

    newPlanetes[index] = planet;

    setPlanets(newPlanetes);
  }, [planets]);

  useEffect(() => {
    if (transitionsPlanetsParams.length || transitionsPositionsParams.length) {
      return;
    }

    setIsLoading(true);

    getTransitionsParams()
      .then(({ transitionsPlanetsParams, transitionsPositionsParams }) => {
        dispatch(setTransitionParams({
          transitionsPlanetsParams,
          transitionsPositionsParams
        }));
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const addTransit = useCallback(() => {
    setPlanets([
      ...planets,
      {
        planet: 1,
        position: '',
        direction: planetMovingOptions[0].value,
        min: 0,
        max: 30
      }
    ]);
  }, [planets]);

  const onClose = useCallback((index: number) => {
    setPlanets([...planets].filter((planet, order) => index !== order));
  }, [planets, setPlanets]);

  const targetPlanets = useGetTargetPlanets();

  const planetsNames = useMemo(() => {
    if (!(!!targetPlanets.length && !!transitionsPlanetsParams.length)) {
      return;
    }

    return [...targetPlanets.map((planet) => {
      return transitionsPlanetsParams.find((_planet) => _planet.id === planet.planet)?.planet as string;
    })];
  }, [targetPlanets, transitionsPlanetsParams]);

  const onCountClick = useCallback(() => {
    if (!dateStart || !dateTo) {
      return;
    }

    dispatch(setTransitionTable([]));
    dispatch(setIsTransitionTableLoading(true));
    dispatch(setTargetPlanets(planets));

    getTransitions({
      dateStart,
      dateTo,
      planets,
      isMovementMerge,
      isRasiMerge,
      condition: condition.value
    }).then((table) => {
      dispatch(setTransitionTable(table));
    }).finally(() => {
      dispatch(setIsTransitionTableLoading(false));
    });

    setTimeout(() => {
      window.scrollTo(2, document.body.scrollHeight);
    }, 100);
  }, [isRasiMerge, condition, isMovementMerge, dateStart, planets, dateStart, dateTo]);

  return (
    <>
      { isLoading && <HoroscopesLoader /> }
      { !isLoading && (
        <>
          <Grid pl={2} pr={2} overflow={'hidden'}>
            <Grid item container justifyContent={'space-between'}>
              <Grid item width={'calc(50% - 5px)'}>
                <Input placeholder={'Начальная дата'} inputType={InputType.date} value={dateStart} onChange={setDateStart} />
              </Grid>
              <Grid item width={'calc(50% - 5px)'}>
                <Input placeholder={'Конечная дата'} inputType={InputType.date} value={dateTo} onChange={setDateTo} />
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
              {
                planets.map((_, index) => (
                  <TransitionItem
                    key={index}
                    planet={planets[index]}
                    label={`Транзит планеты ${index + 1}`}
                    setPlanet={(planet: TransitionsPlanet) => setPlanet(planet, index)}
                    close={() => onClose(index)}
                  />
                ))
              }
            </Grid>
            {planets.length < 2 && <Grid display={'flex'} alignItems={'center'} pt={2} onClick={addTransit}>
              <Box width={'30px'} height={'30px'} pr={2}>
                <img alt='plus' src={plus} width={'30px'} height={'30px'}/>
              </Box>
              <p className={styles.textClosed}>
                Добавить транзит
              </p>
            </Grid>}
            <Grid pt={3} mb={5}>
              <Button onClick={onCountClick} type={ButtonType.gradient} text={'Рассчитать'}/>
            </Grid>
          </Grid>
          <Grid>
            {!!transitionTable.length && !isTransitionsTableLoading && <TransitionTable planetsNames={planetsNames} rows={transitionTable} />}
            {isTransitionsTableLoading && <HoroscopesLoader />}
          </Grid>
        </>
      )}
    </>
  );
};

export default TransitionSearch;
