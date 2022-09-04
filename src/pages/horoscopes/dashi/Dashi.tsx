import React from 'react';
import DashiTable from '../../../components/table/DashiTable';
import { Box, Grid, Typography } from '@mui/material';

const Dashi = () => {
  return (
    <Grid container pt={2} direction={'column'} rowSpacing={2}>
      <Grid item pl={4}>
        <Typography fontFamily={'Playfair Display'} color={'white'} fontSize={'24px'} fontWeight={700}>
          Вимшоттари Даша
        </Typography>
      </Grid>
      <Grid item>
        <DashiTable />
      </Grid>
      <Grid item pl={4}>
        <Typography fontFamily={'Playfair Display'} color={'white'} fontSize={'24px'} fontWeight={700}>
          Чара Даша К.Н. Рао
        </Typography>
      </Grid>
      <Grid item>
        <DashiTable />
      </Grid>
    </Grid>
  );
};

export default Dashi;
