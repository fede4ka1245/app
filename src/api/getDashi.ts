import axios from 'axios';
import { HoroscopeData } from '../models/types/HoroscopeData';
import camelcaseKeys from 'camelcase-keys';
import { getFormattedGreenwich } from '../helpers/getFormattedGreenwich';

export const getDashi = async ({ userName, latitude, longitude, date, time, hours, minutes, greenwich }: HoroscopeData) => {
  const { data: vim } = await axios.post(`${process.env.REACT_APP_API_URL}/horoscope/get-dashi/`, {
    name_user: userName,
    longitude,
    latitude,
    dt: date.split('.').reverse().join('-') + 'T' + time,
    name: 'vim',
    part_world: getFormattedGreenwich(greenwich),
    tz_hour: Number(hours) || null,
    tz_minutes: minutes || null,
    next_period: 1
  });

  const { data: chr } = await axios.post(`${process.env.REACT_APP_API_URL}/horoscope/get-dashi/`, {
    name_user: userName,
    longitude,
    latitude,
    dt: date.split('.').reverse().join('-') + 'T' + time,
    name: 'chr',
    part_world: getFormattedGreenwich(greenwich),
    tz_hour: Number(hours) || null,
    tz_minutes: minutes || null,
    next_period: 1
  });

  return { vim: camelcaseKeys(vim?.data, { deep: true }), chr: camelcaseKeys(chr?.data, { deep: true }) };
};
