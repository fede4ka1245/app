import axios from 'axios';
import { HoroscopeData } from '../models/types/HoroscopeData';
import camelcaseKeys from 'camelcase-keys';
import { getFormattedGreenwich } from '../helpers/getFormattedGreenwich';
import { getFormattedRashiTable } from '../helpers/getFormattedRashiTable';
import { RashiTable } from '../models/types/RashiTable';

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

  const dashiTable = camelcaseKeys(data?.data?.dashiMap, { deep: true });
  const horoscopeDate = data.data?.dt;
  const muntha = data.data?.varshesha;
  const yogasTable = camelcaseKeys(data?.data?.yogaTable, { deep: true });
  const yearMasterTable = data?.data?.main.map((tableItem: any) => ({
    sign: tableItem?.point,
    planet: tableItem?.graxa,
    pvb: tableItem?.pvb
  }));
  const yearMaster = data?.data?.ruler_year;
  const rashiTable = getFormattedRashiTable(data?.data?.rashiMap) as RashiTable;
  const varshpahalaMaps = camelcaseKeys(data?.data?.hororscopeMaps, { deep: true });

  return {
    dashiTable,
    yogasTable,
    yearMasterTable,
    yearMaster,
    rashiTable,
    varshpahalaMaps,
    horoscopeDate,
    muntha
  };
};
