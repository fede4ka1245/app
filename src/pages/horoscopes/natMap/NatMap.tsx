import React, { useMemo } from 'react';
import styles from './NatMap.module.scss';
import img from './img.png';
import Switch from '../../../components/switch/Switch';
import { Grid } from '@mui/material';
import deepSky from './deepSky.svg';
import { useGetRashiTable, useGetTargetMapValue } from '../../../store/selectors';
import RashiTable from '../../../components/rashiTable/RashiTable';
import Dashi from '../dashi/Dashi';

const NatMap = () => {
  const rashiTable = useGetRashiTable();
  const targetMapValue = useGetTargetMapValue();

  const rows = useMemo(() => {
    return rashiTable.find((rashiTableItem) => rashiTableItem.tableName === targetMapValue)?.table.primaryData || [];
  }, [rashiTable, targetMapValue]);

  return (
    <>
      <Grid container pl={2} pr={2} direction={'column'}>
        <Grid item>
          <section className={styles.main} style={{ background: `url("${img}")` }}>
            <img alt='deepSky' src={deepSky} style={{ margin: '0 auto 0 10px' }} />
            <Switch />
          </section>
        </Grid>
      </Grid>
      <RashiTable rows={rows} />
      <Dashi />
    </>
  );
};

export default NatMap;
