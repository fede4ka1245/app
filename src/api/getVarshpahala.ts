import axios from 'axios';
import { HoroscopeData } from '../models/types/HoroscopeData';
import camelcaseKeys from 'camelcase-keys';
import { getFormattedGreenwich } from '../helpers/getFormattedGreenwich';

export const getVarshpahala = async ({ userName, latitude, longitude, date, time, hours, minutes, greenwich }: HoroscopeData) => {
  const { data } = await axios.post('https://backm.alpha-astro.ru/horoscope/get-varshaphala/', {
    name_user: userName,
    latitude,
    longitude,
    dt: date.split('.').reverse().join('-') + 'T' + time,
    part_world: getFormattedGreenwich(greenwich),
    tz_hour: hours || null,
    tz_minutes: minutes || null
  });

  const dashiTable = data?.data?.find((table: any) => table?.tableName === 'mudda_dasha').table;
  const yogasTable = data?.data?.find((table: any) => table?.tableName === 'tajaka_yoga').table.map(({ badge, connection, planets }: any) => ({
    badge: {
      ...badge,
      resize: badge.resize === 'icon-resize-full' ? 'disconnecting' : badge.resize === 'icon-resize-full' ? 'connecting' : undefined
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

  const rashiTable = data?.data?.find((table: any) => table?.tableName === 'main_rashi').table.map((tableItem: any) => {
    const planet = {
      name: tableItem.planet.replace('(R)', ''),
      isRetragraded: tableItem.planet.includes('(R)')
    };

    return {
      ...tableItem,
      planet
    };
  });

  return {
    dashiTable: camelcaseKeys(dashiTable, { deep: true }),
    yogasTable: camelcaseKeys(yogasTable, { deep: true }),
    yearMasterTable,
    yearMaster,
    rashiTable
  };
};
