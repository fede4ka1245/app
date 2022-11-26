import axios from 'axios';
import { HoroscopeData } from '../models/types/HoroscopeData';
import { getFormattedGreenwich } from '../helpers/getFormattedGreenwich';
import { RashiTable } from '../models/types/RashiTable';
import { getFormattedRashiTable } from '../helpers/getFormattedRashiTable';

export const getRashiTable = async ({ userName, latitude, longitude, date, time, hours, minutes, greenwich }: HoroscopeData): Promise<RashiTable> => {
  const { data } = await axios.post(`${process.env.REACT_APP_API_URL}/horoscope/get-general-table/`, {
    name_user: userName,
    longitude,
    latitude,
    dt: date.split('.').reverse().join('-') + 'T' + time,
    part_world: getFormattedGreenwich(greenwich),
    tz_hour: Number(hours) || null,
    tz_minutes: minutes || null
  });

  return getFormattedRashiTable(data.data) as RashiTable;
};
