import React, { useCallback, useState } from 'react';
import { Grid } from '@mui/material';
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

const TransitionSearch = () => {
  const { latitude, longitude, time, userName, date, hours, greenwich, minutes } = useGetHoroscopeUserInfo();
  const [firstTransit, setFirstTransit] = useState({
    planet: '',
    constellation: ''
  });
  const [secondTransit, setSecondTransit] = useState({
    planet: '',
    constellation: ''
  });
  const [dateStart, setDateStart] = useState<string>();
  const [dateEnd, setEndStart] = useState<string>();
  const [transitionTable, setTransitionTable] = useState<TransitionsTableRow []>([]);
  const [isLoading, setIsLoading] = useState(false);

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
      planet2: secondTransit.planet,
      constellation2: secondTransit.constellation
    }).then((table) => {
      setTransitionTable(table);
    }).finally(() => {
      setIsLoading(false);
    });
  }, [latitude, longitude, time, userName, date, hours, greenwich, minutes, firstTransit, secondTransit, dateStart, dateEnd]);

  return (
    <>
      <Grid pl={2} pr={2}>
        <Grid item container justifyContent={'space-between'}>
          <Grid item width={'calc(50% - 5px)'}>
            <Input placeholder={'Начальная дата'} inputType={InputType.date} value={dateStart} onChange={setDateStart} />
          </Grid>
          <Grid item width={'calc(50% - 5px)'}>
            <Input placeholder={'Конечная дата'} inputType={InputType.date} value={dateEnd} onChange={setEndStart} />
          </Grid>
        </Grid>
        <Grid item>
          <TransitionItem setPlanet={setFirstPlanet} setConstellation={setFirstConstellation} label={'Транзит планеты 1'} />
        </Grid>
        <Grid item>
          <TransitionItem setPlanet={setSecondPlanet} setConstellation={setSecondConstellation} label={'Транзит планеты 2'}/>
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
