import React from 'react';
import styles from './YogasTable.module.scss';
import YogasTableRow from './YogasTableRow';

const YogasTable = ({ rows }: any) => {
  return (
    <div className={styles.main}>
      {rows.map((row: any) => (
        <YogasTableRow row={row} key={row?.planets?.join(' - ')}/>
      ))}
    </div>
  );
};

export default YogasTable;
