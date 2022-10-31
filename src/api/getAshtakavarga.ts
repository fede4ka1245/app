import { HoroscopeData } from '../models/types/HoroscopeData';
import axios from 'axios';

export const getAshtakavarga = async ({ userName, latitude, longitude, date, time }: HoroscopeData) => {
  const { data } = await axios.post('https://backm.alpha-astro.ru/horoscope/get-ashtakavarga/', {
    name_user: userName,
    longitude,
    latitude,
    dt: date.split('.').reverse().join('-') + 'T' + time,
    part_world: null,
    tz_hour: null,
    tz_minutes: null
  });

  return data?.data;
};
