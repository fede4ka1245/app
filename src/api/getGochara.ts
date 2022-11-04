import { HoroscopeData } from '../models/types/HoroscopeData';
import axios from 'axios';
import { getFormattedGreenwich } from '../helpers/getFormattedGreenwich';
import { TransitionsTableRow } from '../models/types/TransitionsTableRow';
import { getFormattedDate } from '../helpers/getFormattedDate';

interface getGocharaProps extends HoroscopeData {
  dateStart: string,
  dateEnd: string,
  planet1: string,
  constellation1: string,
  planet2?: string,
  constellation2?: string,
}

const getFormattedGochara = (gochara: any): TransitionsTableRow [] => {
  const newGochara = gochara.map((gocharaItem: any) => {
    if (gocharaItem.length === 3) {
      const [obj1, obj2, obj3] = gocharaItem;

      const dateStart = getFormattedDate(Object.values(obj2)[0] as string);
      const dateEnd = getFormattedDate(Object.values(obj3)[0] as string);

      const [name, sign] = Object.entries(obj1)[0];
      const planets = [{ name, sign }];

      return {
        planets,
        dateStart,
        dateEnd
      };
    } else {
      const [obj1, obj2, obj3, obj4] = gocharaItem;

      const dateStart = getFormattedDate(Object.values(obj3)[0] as string);
      const dateEnd = getFormattedDate(Object.values(obj4)[0] as string);

      const [name, sign] = Object.entries(obj1)[0];
      const [name2, sign2] = Object.entries(obj2)[0];
      const planets = [{ name, sign }, { name: name2, sign: sign2 }];

      return {
        planets,
        dateStart,
        dateEnd
      };
    }
  });

  return Array.from(newGochara);
};

export const getGochara = async ({ userName, latitude, longitude, date, time, hours, minutes, greenwich, dateStart, dateEnd, planet1, constellation1, planet2, constellation2 }: getGocharaProps) => {
  const { data } = await axios.post('https://backm.alpha-astro.ru/horoscope/get-gochara/', {
    name_user: userName,
    longitude,
    latitude,
    dt: date.split('.').reverse().join('-') + 'T' + time,
    part_world: getFormattedGreenwich(greenwich),
    tz_hour: Number(hours) || null,
    tz_minutes: minutes || null,
    'date_from': dateStart.split('.').reverse().join('-'),
    'date_to': dateEnd.split('.').reverse().join('-'),
    'planet_1': planet1,
    'constellation_1': constellation1,
    'title_1': 'D-1',
    'planet_2': planet2 || null,
    'constellation_2': constellation2 || null,
    'title_2': constellation2 ? 'D-1' : null
  });

  return getFormattedGochara(data.data);
};
