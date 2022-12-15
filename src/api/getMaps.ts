import { HoroscopeData } from '../models/types/HoroscopeData';
import { getFormattedGreenwich } from '../helpers/getFormattedGreenwich';
import { getFormattedMaps } from '../helpers/getFormattedMaps';
import authRequest from './authRequest';

export const getMaps = async ({ userName, latitude, longitude, date, time, hours, minutes, greenwich }: HoroscopeData) => {
  const { data } = await authRequest.post(`${process.env.REACT_APP_API_URL}/horoscope/get-horoscope/`, {
    name_user: userName,
    longitude,
    latitude,
    dt: date.split('.').reverse().join('-') + 'T' + time,
    part_world: getFormattedGreenwich(greenwich),
    tz_hour: Number(hours) || null,
    tz_minutes: minutes || null
  });

  return getFormattedMaps(data.data);
};
