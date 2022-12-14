import React from 'react';
import { TransitionsTableRow } from '../../../../../models/types/TransitionsTableRow';
import styles from './TransitionTable.module.scss';
import { Grid } from '@mui/material';

interface TransitionTableProps {
  rows: TransitionsTableRow [],
  planetsNames?: string []
}

const TransitionTable = ({ rows, planetsNames }: TransitionTableProps) => {
  return (
    <div className={styles.main}>
      <div className={styles.row}>
        <Grid container>
          {planetsNames?.map((name: string, index) => (
            <Grid className={styles.header} key={index} width={'50%'} textAlign={'center'}>
              {name}
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
              {row.signs.map((sign, index) => (
                <Grid ml={'5px'} key={index} className={styles.planet}>
                  <div>
                    {sign.sign} {sign.motionType}
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
