import axios from 'axios';
import { HoroscopeData } from '../models/types/HoroscopeData';

const getFormattedMaps = (horoscopes: any) => {
  const formattedHoroscope: any = [];

  Array.from(Object.entries(horoscopes)).forEach(([key, value]) => {
    if (key === 'table') {
      return;
    }

    const mapSections = Object.values(value as any).map((array) => {
      if (!Array.isArray(array) || !array[0] || !array[0].length) {
        return {
          mainInfo: '',
          additionalInfo: ''
        };
      }

      let mainInfo = '';
      let additionalInfo = '';

      // eslint-disable-next-line camelcase
      array[0].forEach(({ additional_info, main_info }: any) => {
        // eslint-disable-next-line camelcase
        if (additional_info === 'font_bold') {
          // eslint-disable-next-line camelcase
          mainInfo += main_info + ' ';
        } else {
          // eslint-disable-next-line camelcase
          additionalInfo += main_info + ' ';
        }
      });

      return {
        mainInfo: mainInfo.trim(),
        additionalInfo: additionalInfo.trim()
      };
    });

    formattedHoroscope.push({
      mapSections,
      value: key,
      label: key
    });
  });

  return formattedHoroscope;
};

export const getMaps = async ({ userName, latitude, longitude, date, time }: HoroscopeData) => {
  const { data } = await axios.post('https://backm.alpha-astro.ru/horoscope/get-horoscope/', {
    name_user: userName,
    longitude,
    latitude,
    dt: date.split('.').reverse().join('-') + 'T' + time
  });

  console.log(data);

  return getFormattedMaps(data);
};
