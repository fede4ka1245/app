import React, { useMemo, useCallback, useEffect, useState } from 'react';
import styles from './NatMap.module.scss';
import img from './img.png';
import Switch from '../../../components/switch/Switch';
import { Grid } from '@mui/material';
import deepSky from './deepSky.svg';
import {
  useGetHoroscopeUserInfo,
  useGetIsDeepSkyActive,
  useGetRashiTable,
  useGetTargetMapValue
} from '../../../store/selectors';
import RashiTable from '../../../components/rashiTable/RashiTable';
import Dashi from '../dashi/Dashi';
import { useAppDispatch } from '../../../store/store';
import { setDeepSkyObjects, setIsDeepSkyActive } from '../../../store/reducers/deepSkyReducer';
import { getDeepSky } from '../../../api/getDeepSky';
import { RashiTableRow } from '../../../models/types/RashiTableRow';
import { setRashiTable, setTargetMapValue } from '../../../store/reducers/horoscopesReducer';
import { CurrentDeepSkyObject } from '../../../models/types/CurrentDeepSkyObject';
import { DeepSkyObject } from '../../../models/types/DeepSkyObject';
import { DeepSkyYear } from '../../../models/types/DeepSkyYear';
import { signDegreesToMinutes } from '../../../helpers/deepSky/signDegreesToMinutes';
import { isOrbis } from '../../../helpers/deepSky/isOrbis';
import { getOrbis } from '../../../helpers/deepSky/getOrbis';
import AppLoader from '../../../components/appLoader/AppLoader';
import { getFormattedZodiacSign } from '../../../helpers/getFormattedZodiacSign';

const NatMap = () => {
  const [isLoading, setIsLoading] = useState<boolean>();
  const rashiTable = useGetRashiTable();
  const targetMapValue = useGetTargetMapValue();
  const dispatch = useAppDispatch();
  const { date } = useGetHoroscopeUserInfo();

  const rows = useMemo(() => {
    return rashiTable.find((rashiTableItem) => rashiTableItem.tableName === targetMapValue)?.table.primaryData || [];
  }, [rashiTable, targetMapValue]);

  const isDeepSkyActive = useGetIsDeepSkyActive();

  const toggleDeepSky = useCallback(() => {
    dispatch(setIsDeepSkyActive(!isDeepSkyActive));
  }, [isDeepSkyActive]);

  useEffect(() => {
    if (!isDeepSkyActive) {
      return;
    }

    dispatch(setTargetMapValue('D-1'));

    setIsLoading(true);

    getDeepSky()
      .then((deepSkyObjects) => {
        const rashiMapIndex = rashiTable.findIndex((rashiTableItem) => rashiTableItem.tableName === 'D-1');
        const primaryData = rashiTable[rashiMapIndex].table.primaryData || [];
        const year = Number(date.split('.')[2]);

        const currentDeepSkyObjects: CurrentDeepSkyObject [] = deepSkyObjects.map((deepSkyObject: DeepSkyObject) => {
          const _year = deepSkyObject.years.find((deepSkyYear) => {
            return Number(deepSkyYear.value) === Number(Math.round(year / 10) * 10);
          }) as DeepSkyYear;

          if (!_year) {
            return deepSkyObject;
          }

          return {
            ...deepSkyObject,
            year: {
              ..._year,
              siderealSign: getFormattedZodiacSign(_year?.siderealSign),
              tropicalSign: getFormattedZodiacSign(_year?.tropicalSign)
            }
          };
        });

        const targetDeepSkyObjects: CurrentDeepSkyObject [] = [];

        const _primaryData = primaryData.map((rashiTableRow: RashiTableRow) => {
          const deepSkyObject = currentDeepSkyObjects.find((deepSkyObject) => {
            if (!deepSkyObject?.year?.siderealSign) {
              return false;
            }

            const sign = deepSkyObject.year.siderealSign;
            const minutes = deepSkyObject.year.siderealMinutes;
            const degrees = deepSkyObject.year.siderealSigndegree;

            const deepSkyObjectMinutes = signDegreesToMinutes({ sign, degrees, minutes });
            const planetMinutes = signDegreesToMinutes({ sign: rashiTableRow.sign, degrees: rashiTableRow.degrees, minutes: rashiTableRow.minutes });

            const orbis = getOrbis(deepSkyObject.stellarObjectType, rashiTableRow.planet.name);

            if (isOrbis(planetMinutes, deepSkyObjectMinutes, orbis)) {
              targetDeepSkyObjects.push(deepSkyObject);
            }

            return isOrbis(planetMinutes, deepSkyObjectMinutes, orbis);
          });

          return {
            ...rashiTableRow,
            deepSkyObject
          };
        });

        dispatch(setDeepSkyObjects(targetDeepSkyObjects));

        const _rashiTable = Array.from(rashiTable);

        _rashiTable[rashiMapIndex] = {
          ..._rashiTable[rashiMapIndex],
          table: {
            ..._rashiTable[rashiMapIndex].table,
            primaryData: _primaryData
          }
        };

        dispatch(setRashiTable(_rashiTable));
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [isDeepSkyActive]);

  useEffect(() => {
    if (targetMapValue !== 'D-1') {
      dispatch(setIsDeepSkyActive(false));
    }
  }, [targetMapValue]);

  useEffect(() => {
    return () => {
      dispatch(setIsDeepSkyActive(false));
    };
  }, []);

  return (
    <>
      <AppLoader isLoading={isLoading}/>
      <Grid container pl={2} pr={2} direction={'column'}>
        <Grid item>
          <section className={styles.main}>
            <img src={img} className={styles.background}/>
            <img alt='deepSky' src={deepSky} style={{ margin: '0 auto 0 10px' }} />
            <Switch onChange={toggleDeepSky} checked={isDeepSkyActive} />
          </section>
        </Grid>
      </Grid>
      <RashiTable rows={rows} isDeepSkyActive={isDeepSkyActive}/>
      <Dashi />
    </>
  );
};

export default NatMap;
