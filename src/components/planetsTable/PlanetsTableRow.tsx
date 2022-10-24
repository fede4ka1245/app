import React, { useCallback, useState } from 'react';
import { Grid } from '@mui/material';
import styles from './PlanetsTable.module.scss';
import { PlanetTableRow } from '../../models/types/PlanetTableRow';
import classNames from 'classnames';

interface PlanetsTableRowProps {
  row: PlanetTableRow,
}

const PlanetsTableRow = ({ row }: PlanetsTableRowProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  return (
    <>
      <Grid container className={classNames(styles.row, { [styles.isOpen]: isOpen, [styles.isOpened]: !!row.planets })}>
        {!!row.subTable.length && <Grid item pl={1} display={'flex'} alignItems={'center'} justifyContent={'center'}>
          {!isOpen && <svg onClick={toggleIsOpen} width="7" height="14" viewBox="0 0 7 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1.5L5.24095 6.68338C5.39164 6.86756 5.39164 7.13244 5.24095 7.31662L1 12.5" stroke="#C3C9CD" strokeWidth="2" strokeLinecap="round"/>
          </svg>}
          {isOpen && <svg onClick={toggleIsOpen} width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 1.75L6.81662 5.99095C6.63244 6.14164 6.36756 6.14164 6.18338 5.99095L1 1.75" stroke="#37366B" strokeWidth="2" strokeLinecap="round"/>
          </svg>}
        </Grid>}
        <Grid item pl={1}>
          {row.planets || row.planet}
        </Grid>
      </Grid>
      <Grid className={classNames(styles.row, { [styles.isOpen]: isOpen, [styles.isOpened]: !!row.planets })}>
        {row.dateStart}
      </Grid>
      <Grid className={classNames(styles.row, { [styles.isOpen]: isOpen, [styles.isOpened]: !!row.planets })}>
        {row.dateEnd}
      </Grid>
      {isOpen && <>
        {row.subTable?.map((row, index) => (
          <PlanetsTableRow row={row} key={index} />
        ))}
      </>}
    </>
  );
};

export default PlanetsTableRow;
