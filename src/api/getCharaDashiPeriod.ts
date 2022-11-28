import axios from 'axios';
import { getFormattedGreenwich } from '../helpers/getFormattedGreenwich';
import { HoroscopeData } from '../models/types/HoroscopeData';
import camelcaseKeys from 'camelcase-keys';

interface GetCharaDashiPeriodProps extends HoroscopeData {
  period: number
}

export const getCharaDashiPeriod = async ({ userName, latitude, longitude, date, time, hours, minutes, greenwich, period }: GetCharaDashiPeriodProps) => {
  const { data } = await axios.post(`${process.env.REACT_APP_API_URL}/horoscope/get-dashi/`, {
    name_user: userName,
    longitude,
    latitude,
    dt: date.split('.').reverse().join('-') + 'T' + time,
    name: 'chr',
    part_world: getFormattedGreenwich(greenwich),
    tz_hour: Number(hours) || null,
    tz_minutes: minutes || null,
    next_period: period
  });

  return { data: camelcaseKeys(data?.data, { deep: true }) };
};
