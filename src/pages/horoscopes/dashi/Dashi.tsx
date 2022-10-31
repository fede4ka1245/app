import React, { useState } from 'react';
import { Grid } from '@mui/material';
import DashiTable from '../../../components/dashiTable/DashiTable';
import { useGetDashiChr, useGetDashiVim, useGetIsDashiLoading } from '../../../store/selectors';
import Header from '../../../components/header/Header';
import { Option } from '../../../models/types/Option';
import Options from '../../../components/options/Options';
import HoroscopesLoader from '../components/horoscopeLoader/HoroscopesLoader';

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
            </Grid>}
          </>
        )}
    </Grid>
  );
};

export default Dashi;
