import React, { useState } from 'react';
import { Grid } from '@mui/material';
import PlanetsTable from '../../../components/planetsTable/PlanetsTable';
import { useGetDashiChr, useGetDashiVim, useGetIsDashiLoading } from '../../../store/selectors';
import Loader from '../../../components/loader/Loader';
import Header from '../../../components/header/Header';
import { Option } from '../../../models/types/Option';
import Options from '../../../components/options/Options';

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
          <Grid width={'100%'} height={'100%'} minHeight={'150px'} display={'flex'} justifyContent={'center'}
            alignItems={'center'}>
            <Loader/>
          </Grid>
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
              <PlanetsTable rows={dashiVim} />
            </Grid>}
            {dashi.value === 'chr' && <Grid item pt={2}>
              <PlanetsTable rows={dashiChr} />
            </Grid>}
          </>
        )}
    </Grid>
  );
};

export default Dashi;
