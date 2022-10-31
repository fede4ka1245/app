import React from 'react';
import styles from './DashiTable.module.scss';
import { DashiTableRow as IDashiTableRow } from '../../models/types/DashiTableRow';
import DashiTableRow from './DashiTableRow';

interface DashiTableProps {
  rows?: IDashiTableRow[],
}

const DashiTable = ({ rows }: DashiTableProps) => {
  return (
    <div className={styles.main}>
      {rows?.map((row, index) => (
        <DashiTableRow row={row} key={index} />
      ))}
    </div>
  );
};

export default DashiTable;
