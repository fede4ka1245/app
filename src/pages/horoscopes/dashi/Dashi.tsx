import React from 'react';
import { Grid, Typography } from '@mui/material';
import PlanetsTable from '../../../components/planetsTable/PlanetsTable';
import Table from '../../../components/table/Table';

const Dashi = () => {
  return (
    <Grid container pt={2} direction={'column'} rowSpacing={2}>
      <Grid item pl={4}>
        <Typography fontFamily={'Playfair Display'} color={'white'} fontSize={'24px'} fontWeight={700}>
          Вимшоттари Даша
        </Typography>
      </Grid>
      <Grid item>
        <PlanetsTable />
      </Grid>
      <Grid item pt={2}>
        <Table />
      </Grid>
    </Grid>
  );
};

export default Dashi;
