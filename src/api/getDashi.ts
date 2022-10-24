import axios from 'axios';
import { HoroscopeData } from '../models/types/HoroscopeData';
import camelcaseKeys from 'camelcase-keys';

export const getDashi = async ({ userName, latitude, longitude, date, time }: HoroscopeData) => {
  const { data: vim } = await axios.post('https://backm.alpha-astro.ru/horoscope/get-dashi/', {
    name_user: userName,
    longitude,
    latitude,
    dt: date.split('.').reverse().join('-') + 'T' + time,
    name: 'vim'
  });

  const { data: chr } = await axios.post('https://backm.alpha-astro.ru/horoscope/get-dashi/', {
    name_user: userName,
    longitude,
    latitude,
    dt: date.split('.').reverse().join('-') + 'T' + time,
    name: 'chr'
  });

  return { vim: camelcaseKeys(vim?.data, { deep: true }), chr: camelcaseKeys(chr?.data, { deep: true }) };
};
