import React, { useCallback, useState } from 'react';
import { Grid, Typography, CardActionArea } from '@mui/material';
import DashiTable from '../../../components/dashiTable/DashiTable';
import {
  useGetDashiChr,
  useGetDashiChrPeriod,
  useGetDashiVim,
  useGetHoroscopeUserInfo, useGetIsDashiChrPeriodLoading,
  useGetIsDashiLoading
} from '../../../store/selectors';
import Header from '../../../components/header/Header';
import { Option } from '../../../models/types/Option';
import Options from '../../../components/options/Options';
import HoroscopesLoader from '../components/horoscopeLoader/HoroscopesLoader';
import { getCharaDashiPeriod } from '../../../api/getCharaDashiPeriod';
import { useAppDispatch } from '../../../store/store';
import { setDashiChr, setDashiChrPeriod, setIsDashiChrPeriodLoading } from '../../../store/reducers/horoscopesReducer';
import Loader from '../../../components/loader/Loader';

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

const Dashi = () => {
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
            {dashi.value === 'chr' && <Grid item pt={2} pb={2}>
              <DashiTable rows={dashiChr} />
              {!isDashiChrPeriodLoading && <Grid pt={2}>
                <CardActionArea onClick={onLoadNextPeriod}>
                  <Typography fontFamily={'Gilroy'} fontWeight={500} fontSize={'16px'} color={'white'} textAlign={'center'} m={1}>
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

export default Dashi;
