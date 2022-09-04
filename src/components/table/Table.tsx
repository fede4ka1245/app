import React from 'react';
import styles from './Table.module.scss';
import { Typography } from '@mui/material';
import img from '../../pages/horoscopes/natMap/img.png';
import sign from '../../pages/horoscopes/natMap/sign.svg';
import Row from './Row';

const Table = () => {
  return (
    <table className={styles.table} cellSpacing="0" cellPadding="0">
      <tr>
        <th>
          Асцендент
        </th>
        <th>
        </th>
        <th>
          Знак
        </th>
        <th>
          Градусы
        </th>
        <th>
          Накшатра
        </th>
      </tr>
      {
        Array.from({ length: 10 }).map((_, index) => (
          <Row key={index}/>
        ))
      }
    </table>
  );
};

export default Table;
