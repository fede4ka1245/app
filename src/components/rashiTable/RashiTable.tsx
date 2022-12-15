import React from 'react';
import styles from './RashiTable.module.scss';
import { Grid } from '@mui/material';
import { RashiTableRow as IRashiTableRow } from '../../models/types/RashiTableRow';
import RashiTableRow from './rashiTableRow/RashiTableRow';
import { useGetIsHelpersElementsActive } from '../../hooks/useGetIsHelpersElementsActive';
import { RashiTableParts } from '../../models/types/RashiTable';

interface RashiTableProps {
  table?: RashiTableParts,
  isDeepSkyActive?: boolean,
}

const RashiTable = ({ table, isDeepSkyActive }: RashiTableProps) => {
  const {
    isTranssaturnsActive,
    isMandyAndGulikaActive,
    isSpecialLagnaActive,
    isUpagrahsActive
  } = useGetIsHelpersElementsActive();

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
      {table?.primaryData?.map((rashiItem: IRashiTableRow, index) => (
        <RashiTableRow rashiItem={rashiItem} key={index} isDeepSkyActive={isDeepSkyActive} />
      ))}
      {isTranssaturnsActive && table?.transsaturnData?.map((rashiItem: IRashiTableRow, index) => (
        <RashiTableRow rashiItem={rashiItem} key={index} isDeepSkyActive={isDeepSkyActive} />
      ))}
      {isSpecialLagnaActive && table?.specialLagna?.map((rashiItem: IRashiTableRow, index) => (
        <RashiTableRow rashiItem={rashiItem} key={index} isDeepSkyActive={isDeepSkyActive} />
      ))}
      {isMandyAndGulikaActive && table?.primaryUpagraha?.map((rashiItem: IRashiTableRow, index) => (
        <RashiTableRow rashiItem={rashiItem} key={index} isDeepSkyActive={isDeepSkyActive} />
      ))}
      {isUpagrahsActive && table?.secondaryUpagraha?.map((rashiItem: IRashiTableRow, index) => (
        <RashiTableRow rashiItem={rashiItem} key={index} isDeepSkyActive={isDeepSkyActive} />
      ))}
    </div>
  );
};

export default RashiTable;
