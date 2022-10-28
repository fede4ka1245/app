import axios from 'axios';
import { HoroscopeData } from '../models/types/HoroscopeData';
import camelcaseKeys from 'camelcase-keys';

export const getVarshpahala = async ({ userName, latitude, longitude, date, time }: HoroscopeData) => {
  const { data } = await axios.post('https://backm.alpha-astro.ru/horoscope/get-varshaphala/', {
    name_user: userName,
    latitude,
    longitude,
    dt: date.split('.').reverse().join('-') + 'T' + time
  });

  const dashiTable = data?.data?.find((table: any) => table?.tableName === 'mudda_dasha').table;
  const yogasTable = data?.data?.find((table: any) => table?.tableName === 'tajaka_yoga').table;
  const yearMasterTable = data?.data?.find((table: any) => table?.tableName === 'main').table.map((tableItem: any) => ({
    sign: tableItem?.point,
    planet: tableItem?.graxa,
    pvb: tableItem?.pvb
  }));

  return {
    dashiTable: camelcaseKeys(dashiTable, { deep: true }),
    yogasTable: camelcaseKeys(yogasTable, { deep: true }),
    yearMasterTable
  };
};
