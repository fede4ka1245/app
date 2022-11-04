import axios from 'axios';
import { HoroscopeData } from '../models/types/HoroscopeData';
import { getFormattedGreenwich } from '../helpers/getFormattedGreenwich';
import { getFormattedRashiTable } from '../helpers/getFormattedRashiTable';
import { RashiTable } from '../models/types/RashiTable';

export const getRashiTable = async ({ userName, latitude, longitude, date, time, hours, minutes, greenwich }: HoroscopeData): Promise<RashiTable> => {
  const { data } = await axios.post('https://backm.alpha-astro.ru/horoscope/get-general-table/', {
    name_user: userName,
    longitude,
    latitude,
    dt: date.split('.').reverse().join('-') + 'T' + time,
    part_world: getFormattedGreenwich(greenwich),
    tz_hour: Number(hours) || null,
    tz_minutes: minutes || null
  });

  const formatted = data.data.map((el: any) => {
    const [key, value] = Object.entries(el)[0];

    return {
      mapName: key.replace('D', 'D-'),
      table: getFormattedRashiTable((value as any).primaryData)
    };
  });

  return Array.from(formatted);
};
