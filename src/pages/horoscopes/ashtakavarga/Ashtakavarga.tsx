import React from 'react';
import map from './components/northMap.svg';
import { Grid, Typography } from '@mui/material';
import { useGetAshtakavarga, useGetIsAshtakavargaLoading, useGetMapType } from '../../../store/selectors';
import AshtakavargaTable from './components/AshtakavargaTable';
import HoroscopesLoader from '../components/horoscopeLoader/HoroscopesLoader';

const Ashtakavarga = () => {
  const ashtakavarga = useGetAshtakavarga();
  const isAshtakavargaLoading = useGetIsAshtakavargaLoading();
  const mapType = useGetMapType();

  return (
    <>
      {isAshtakavargaLoading && <HoroscopesLoader />}
      {!!ashtakavarga?.length && !isAshtakavargaLoading && <Grid container flexDirection={'row'} flexWrap={'wrap'} justifyContent={'space-between'} display={'flex'} pl={2} pr={2} pt={2}>
        <Grid item width={'100%'} pb={4}>
          <AshtakavargaTable table={ashtakavarga[0].table} tableName={ashtakavarga[0].tableName} mapType={mapType} />
        </Grid>
        {ashtakavarga?.slice(1)?.reverse().map(({ table, tableName }) => (
          <Grid key={tableName} item width={'calc(50% - 2px)'} pb={4}>
            <AshtakavargaTable table={table} tableName={tableName} mapType={mapType} />
          </Grid>
        ))}
      </Grid>}
    </>
  );
};

export default Ashtakavarga;
