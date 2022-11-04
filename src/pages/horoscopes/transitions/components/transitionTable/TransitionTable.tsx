import React from 'react';
import { TransitionsTableRow } from '../../../../../models/types/TransitionsTableRow';
import styles from './TransitionTable.module.scss';
import { Grid } from '@mui/material';

interface TransitionTableProps {
  rows: TransitionsTableRow []
}

const TransitionTable = ({ rows }: TransitionTableProps) => {
  return (
    <div className={styles.main}>
      <div className={styles.row}>
        <Grid container display={'flex'}>
          {rows[0].planets.map((planet) => (
            <Grid ml={'5px'} flex={1} key={planet.name} className={styles.header}>
              {planet.name}
            </Grid>
          ))}
        </Grid>
        <div className={styles.header}>
          Дата начала
        </div>
        <div className={styles.header}>
          Дата окончания
        </div>
      </div>
      {
        rows.map((row, index) => (
          <div key={index} className={styles.row}>
            <Grid container alignItems={'center'} height={'90%'}>
              {row.planets.map((planet) => (
                <Grid ml={'5px'} key={planet.name} className={styles.planet}>
                  <div>
                    {planet.sign}
                  </div>
                </Grid>
              ))}
            </Grid>
            <div>
              {row.dateStart}
            </div>
            <div>
              {row.dateEnd}
            </div>
          </div>
        ))
      }
    </div>
  );
};

export default TransitionTable;
