import axios from 'axios';
import { HoroscopeData } from '../models/types/HoroscopeData';
import camelcaseKeys from 'camelcase-keys';

export const getZones = async ({ userName, latitude, longitude, date, time }: HoroscopeData) => {
  const { data } = await axios.post('https://backm.alpha-astro.ru/horoscope/get-chakras/', {
    name_user: userName,
    latitude,
    longitude,
    dt: date.split('.').reverse().join('-') + 'T' + time
  });

  console.log(data.data.find((table: any) => table.tableName === 'savatobxadra'));
  console.log(data.data);

  return {
    savatobhadra: camelcaseKeys(data.data.find((table: any) => table.tableName === 'savatobxadra').table, { deep: true }),
    shani: camelcaseKeys(data.data.find((table: any) => table.tableName === 'sani').table, { deep: true }),
    calanala: camelcaseKeys(data.data.find((table: any) => table.tableName === 'surya_kalanala').table, { deep: true }),
    compass: camelcaseKeys(data.data.find((table: any) => table.tableName === 'chandra_kalanala').table, { deep: true })
  };
};
