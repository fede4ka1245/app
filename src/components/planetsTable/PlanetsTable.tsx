import React, { useMemo } from 'react';
import { getPlanets } from './getPlanets';
import styles from './PlanetsTable.module.scss';
import PlanetsTableRow from './PlanetsTableRow';

const PlanetsTable = () => {
  const planetsTable = useMemo(() => getPlanets(), []);

  return (
    <div className={styles.main}>
      {planetsTable.map((row, index) => (
        <PlanetsTableRow row={row} key={index} />
      ))}
    </div>
  );
};

export default PlanetsTable;
