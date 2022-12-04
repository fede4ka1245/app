import React, { useCallback, useState } from 'react';
import { Option } from '../../../../models/types/Option';
import {
  useGetDashiChr, useGetDashiChrPeriod,
  useGetDashiVim, useGetHoroscopeUserInfo,
  useGetIsDashiChrPeriodLoading,
  useGetIsDashiLoading
} from '../../../../store/selectors';
import { useAppDispatch } from '../../../../store/store';
import {
  setDashiChr,
  setDashiChrPeriod,
  setIsDashiChrPeriodLoading
} from '../../../../store/reducers/horoscopesReducer';
import { getCharaDashiPeriod } from '../../../../api/getCharaDashiPeriod';
import { CardActionArea, Grid, Typography } from '@mui/material';
import HoroscopesLoader from '../horoscopeLoader/HoroscopesLoader';
import Header from '../../../../components/header/Header';
import Options from '../../../../components/options/Options';
import DashiTable from '../../../../components/dashiTable/DashiTable';
import Loader from '../../../../components/loader/Loader';

const dashiOptions = [
  {
    label: 'Вимшоттари Даша',
    value: 'vim'
  },
  {
    label: 'Чара Даша К.Н. Рао',
    value: 'chr'
  }
];

const MainDashiTable = () => {
  const [dashi, setDashi] = useState<Option>(dashiOptions[0]);
  const dashiChr = useGetDashiChr();
  const dashiVim = useGetDashiVim();
  const isDashiLoading = useGetIsDashiLoading();
  const isDashiChrPeriodLoading = useGetIsDashiChrPeriodLoading();
  const dashiChrPeriod = useGetDashiChrPeriod();
  const horoscopeUserInfo = useGetHoroscopeUserInfo();

  const dispatch = useAppDispatch();

  const onLoadNextPeriod = useCallback(() => {
    dispatch(setDashiChrPeriod(dashiChrPeriod + 1));
    dispatch(setIsDashiChrPeriodLoading(true));

    getCharaDashiPeriod({
      ...horoscopeUserInfo,
      period: dashiChrPeriod + 1
    }).then(({ data }) => {
      dispatch(setDashiChr([...dashiChr, ...data]));
    }).catch(() => {
      dispatch(setDashiChrPeriod(dashiChrPeriod));
    }).finally(() => {
      dispatch(setIsDashiChrPeriodLoading(false));
    });
  }, [dashiChr, dashiChrPeriod, horoscopeUserInfo]);

  return (
    <Grid container pt={2} direction={'column'} rowSpacing={2}>
      {isDashiLoading
        ? (
          <HoroscopesLoader />
        )
        : (
          <>
            <Grid item pl={2}>
              <Header header={'Периоды (ДАШИ)'}/>
            </Grid>
            <Grid pl={2} pt={2}>
              <Options options={dashiOptions} setValue={setDashi} value={dashi.value}/>
            </Grid>
            {dashi.value === 'vim' && <Grid item pt={2}>
              <DashiTable rows={dashiVim} />
            </Grid>}
            {dashi.value === 'chr' && <Grid item pt={2}>
              <DashiTable rows={dashiChr} />
              {!isDashiChrPeriodLoading && <Grid>
                <CardActionArea onClick={onLoadNextPeriod}>
                  <Typography fontFamily={'Gilroy'} fontWeight={500} fontSize={'16px'} color={'white'} textAlign={'center'} m={2}>
                    Расчитать следующий цикл
                  </Typography>
                </CardActionArea>
              </Grid>}
              {isDashiChrPeriodLoading && <Grid width={'100%'} height={'160px'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                <Loader />
              </Grid>}
            </Grid>}
          </>
        )}
    </Grid>
  );
};

export default MainDashiTable;