import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Grid, IconButton } from '@mui/material';
import styles from './DashiTable.module.scss';
import { DashiTableRow as IDashiTableRow } from '../../models/types/DashiTableRow';
import classNames from 'classnames';

interface PlanetsTableRowProps {
  row: IDashiTableRow,
}

const getFormattedMonth = (month: string) => {
  const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];

  const formattedMonth = String(months.findIndex((_month) => month === _month) + 1);

  return formattedMonth.length === 2 ? formattedMonth : `0${formattedMonth}`;
};

const getFormattedDate = (date: string) => {
  const [day, month, year] = date?.split(' ');

  return [day, getFormattedMonth(month), year].join('/');
};

const getIsCurrentDates = (dateStart: string, dateEnd: string) => {
  const [dayStart, monthStart, yearStart] = getFormattedDate(dateStart)?.split('/').map(Number);
  const [dayEnd, monthEnd, yearEnd] = getFormattedDate(dateEnd)?.split('/').map(Number);

  return new Date(yearStart, monthStart, dayStart).getTime() < new Date().getTime() && new Date().getTime() < new Date(yearEnd, monthEnd, dayEnd).getTime();
};

const DashiTableRow = ({ row }: PlanetsTableRowProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  useEffect(() => {
    if (!row.planets.length) {
      setIsOpen(true);
    }
  }, [row]);

  const planetsRowItem = useMemo(() => {
    return row.planets?.length ? `${row.planets.join(' / ')} / ${row.planet}` : row.planet;
  }, [row]);

  const formattedDateStart = useMemo(() => {
    return getFormattedDate(row.dateStart);
  }, [row]);

  const formattedDateEnd = useMemo(() => {
    return getFormattedDate(row.dateEnd);
  }, [row]);

  const isCurrentDates = useMemo(() => {
    return getIsCurrentDates(row.dateStart, row.dateEnd);
  }, [row]);

  return (
    <>
      <Grid container className={classNames(styles.row, { [styles.isOpen]: isOpen, [styles.isOpened]: !!row.planets, [styles.isCurrent]: isCurrentDates })}>
        <Grid item display={'flex'} alignItems={'center'} justifyContent={'center'}>
          {!!row.subTable?.length && <IconButton onClick={toggleIsOpen}>
            {!isOpen && <svg width="14" height="14" viewBox="0 0 7 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1.5L5.24095 6.68338C5.39164 6.86756 5.39164 7.13244 5.24095 7.31662L1 12.5" stroke="#C3C9CD" strokeWidth="2" strokeLinecap="round"/>
            </svg>}
            {isOpen && <svg width="14" height="14" viewBox="0 0 13 8" fill="white" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 1.75L6.81662 5.99095C6.63244 6.14164 6.36756 6.14164 6.18338 5.99095L1 1.75" stroke="#37366B" strokeWidth="2" strokeLinecap="round"/>
            </svg>}
          </IconButton>}
        </Grid>
        <Grid item>
          { planetsRowItem }
        </Grid>
      </Grid>
      <Grid className={classNames(styles.row, { [styles.isOpen]: isOpen, [styles.isOpened]: !!row.planets, [styles.isCurrent]: isCurrentDates })}>
        {formattedDateStart}
      </Grid>
      <Grid className={classNames(styles.row, { [styles.isOpen]: isOpen, [styles.isOpened]: !!row.planets, [styles.isCurrent]: isCurrentDates })}>
        {formattedDateEnd}
      </Grid>
      {isOpen && <>
        {row.subTable?.map((row, index) => (
          <DashiTableRow row={row} key={index} />
        ))}
      </>}
    </>
  );
};

export default DashiTableRow;
