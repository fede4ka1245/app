import React from 'react';
import styles from './RashiTable.module.scss';
import { Grid } from '@mui/material';
import { RashiTableRow as IRashiTableRow } from '../../models/types/RashiTableRow';
import RashiTableRow from './rashiTableRow/RashiTableRow';

interface RashiTableProps {
  rows: IRashiTableRow [],
  isDeepSkyActive?: boolean,
}

const RashiTable = ({ rows, isDeepSkyActive }: RashiTableProps) => {
  return (
    <div className={styles.table}>
      <section className={styles.row} style={{ height: '20px' }}>
        <Grid pl={2} className={styles.header}>
          Планета
        </Grid>
        <Grid className={styles.header}>

        </Grid>
        <Grid className={styles.header}>
          Знак
        </Grid>
        <Grid className={styles.header}>
          Градусы
        </Grid>
        <Grid className={styles.header}>
          Накшатра
        </Grid>
      </section>
      {rows?.map((rashiItem: IRashiTableRow, index) => (
        <RashiTableRow rashiItem={rashiItem} key={index} isDeepSkyActive={isDeepSkyActive} />
      ))}
    </div>
  );
};

export default RashiTable;
