import axios from 'axios';
import { HoroscopeData } from '../models/types/HoroscopeData';
import camelcaseKeys from 'camelcase-keys';
import { getFormattedGreenwich } from '../helpers/getFormattedGreenwich';

const getFormattedRasiTable = (rasiTable: Array<any>) => {
  return [...rasiTable.map((tableItem: any) => {
    return {
      ...tableItem,
      sphuta: tableItem.cpuxuta[0].split(' ').slice(0, 2).join(' ')
    };
  })];
};

interface GetVarshpahalaProps extends HoroscopeData {
  year: number
}

export const getVarshpahala = async ({ userName, latitude, longitude, date, time, hours, minutes, greenwich, year }: GetVarshpahalaProps) => {
  const { data } = await axios.post('https://backm.alpha-astro.ru/horoscope/get-varshaphala/', {
    name_user: userName,
    latitude,
    longitude,
    dt: date.split('.').reverse().join('-') + 'T' + time,
    part_world: getFormattedGreenwich(greenwich),
    tz_hour: Number(hours) || null,
    tz_minutes: minutes || null,
    year
  });

  const dashiTable = data?.data?.find((table: any) => table?.tableName === 'mudda_dasha').table;
  console.log(data?.data?.find((table: any) => table?.tableName === 'tajaka_yoga'));
  const yogasTable = data?.data?.find((table: any) => table?.tableName === 'tajaka_yoga').table.map(({ badge, connection, planets }: any) => ({
    badge: {
      ...badge,
      resize: badge.resize === 'icon-resize-full' ? 'disconnecting' : badge.resize === 'icon-resize-small' ? 'connecting' : undefined
    },
    connection,
    planets
  }));
  const yearMasterTable = data?.data?.find((table: any) => table?.tableName === 'main').table.map((tableItem: any) => ({
    sign: tableItem?.point,
    planet: tableItem?.graxa,
    pvb: tableItem?.pvb
  }));
  const yearMaster = data?.data?.find((table: any) => table?.ruler_year).ruler_year;

  console.log(data?.data?.find((table: any) => table?.tableName === 'main_rashi'));

  const rashiTable = getFormattedRasiTable(data?.data?.find((table: any) => table?.tableName === 'main_rashi').table.primaryData);

  return {
    dashiTable: camelcaseKeys(dashiTable, { deep: true }),
    yogasTable: camelcaseKeys(yogasTable, { deep: true }),
    yearMasterTable,
    yearMaster,
    rashiTable
  };
};
