import React from 'react';
import styles from './YearMasterTable.module.scss';
import { Grid } from '@mui/material';
import { YearMasterTableRow } from '../../../../models/types/YearMasterTableRow';

const YearMasterTable = ({ rows }: { rows: YearMasterTableRow [] }) => {
  return (
    <div className={styles.table}>
      <Grid>
        <Grid item pl={2}>
          Знак
        </Grid>
        <Grid item pl={2}>
          Планета
        </Grid>
        <Grid item textAlign={'center'}>
          ПВБ
        </Grid>
      </Grid>
      {rows?.map((row: any, index: number) => (
        <Grid key={index}>
          <Grid item fontWeight={700} fontFamily={'Gilroy'} fontSize={'17px'} pl={2}>
            {row.sign}
          </Grid>
          <Grid item pl={2} color={'#37366B'} font-weight={500}>
            {row.planet || '-'}
          </Grid>
          <Grid item textAlign={'center'} color={'#1EBA37'} fontWeight={700}>
            {row.pvb || '-'}
          </Grid>
        </Grid>
      ))}
    </div>
  );
};

export default YearMasterTable;
