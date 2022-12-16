import React, { useCallback, useEffect, useState } from 'react';
import { Option } from '../../../../models/types/Option';
import {
  useGetDashiChr,
  useGetDashiVim, useGetHoroscopeUserInfo, useGetIsDashiChrLoading,
  useGetIsDashiChrPeriodLoading, useGetIsDashiVimLoading
} from '../../../../store/selectors';
import { useAppDispatch } from '../../../../store/store';
import {
  setDashiChr,
  setIsChrDashiLoading,
  setIsDashiChrPeriodLoading
} from '../../../../store/reducers/horoscopesReducer';
import { CardActionArea, Grid, Typography } from '@mui/material';
import HoroscopesLoader from '../horoscopeLoader/HoroscopesLoader';
import Header from '../../../../components/header/Header';
import Options from '../../../../components/options/Options';
import DashiTable from '../../../../components/dashiTable/DashiTable';
import Loader from '../../../../components/loader/Loader';
import { getCharaDashi } from '../../../../api/getCharaDashi';

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
  const isDashiChrPeriodLoading = useGetIsDashiChrPeriodLoading();
  const horoscopeUserInfo = useGetHoroscopeUserInfo();
  const isDashiChrLoading = useGetIsDashiChrLoading();
  const isDashiVimLoading = useGetIsDashiVimLoading();

  const dispatch = useAppDispatch();

  const onLoadNextPeriod = useCallback(() => {
    if (!dashiChr) {
      return;
    }

    dispatch(setIsDashiChrPeriodLoading(true));

    getCharaDashi({
      horoscopeData: horoscopeUserInfo,
      dateStart: dashiChr?.dateEnd
    }).then((data) => {
      dispatch(setDashiChr({
        ...dashiChr,
        dateEnd: data.dateEnd,
        table: [...dashiChr.table, ...data.table]
      }));
    }).finally(() => {
      dispatch(setIsDashiChrPeriodLoading(false));
    });
  }, [dashiChr, horoscopeUserInfo]);

  useEffect(() => {
    if (dashi.value !== 'chr' || dashiChr) {
      return;
    }

    dispatch(setIsChrDashiLoading(true));

    getCharaDashi({
      horoscopeData: horoscopeUserInfo
    }).then((data) => {
      dispatch(setDashiChr(data));
    }).finally(() => {
      dispatch(setIsChrDashiLoading(false));
    });
  }, [dashi]);

  return (
    <Grid container pt={2} direction={'column'} rowSpacing={2}>
      <Grid item pl={2}>
        <Header header={'Периоды (ДАШИ)'}/>
      </Grid>
      <Grid pl={2} pt={2}>
        <Options options={dashiOptions} setValue={setDashi} value={dashi.value}/>
      </Grid>
      {dashi.value === 'vim' && <Grid item pt={2}>
        {isDashiVimLoading && <HoroscopesLoader />}
        {!isDashiVimLoading && <DashiTable rows={dashiVim?.table} />}
      </Grid>}
      {dashi.value === 'chr' && <Grid item pt={2}>
        {isDashiChrLoading && <HoroscopesLoader />}
        {!isDashiChrLoading && <DashiTable rows={dashiChr?.table} />}
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
    </Grid>
  );
};

export default MainDashiTable;
