import React from 'react';
import styles from './PlanetsTable.module.scss';
import { PlanetTableRow } from '../../models/types/PlanetTableRow';
import PlanetsTableRow from './PlanetsTableRow';

interface PlanetsTableProps {
  rows?: PlanetTableRow[],
}

const PlanetsTable = ({ rows }: PlanetsTableProps) => {
  return (
    <div className={styles.main}>
      {rows?.map((row, index) => (
        <PlanetsTableRow row={row} key={index} />
      ))}
    </div>
  );
};

export default PlanetsTable;
