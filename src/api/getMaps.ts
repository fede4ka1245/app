import axios from 'axios';
import { HoroscopeData } from '../models/types/HoroscopeData';
import { MapOption } from '../models/types/MapOption';
import { MapSection } from '../models/types/MapSection';

const getFormattedMaps = (horoscopes: any): MapOption[] => {
  return Array.from(horoscopes.map((horoscope: any) => {
    const mapSections: MapSection [] = horoscope.table.map((tableItem: any) => {
      return {
        mainInfo: Array.from(tableItem.main_info).join(' '),
        additionalInfo: Array.from(tableItem.additional_info).join(' ')
      };
    });

    return {
      mapSections: Array.from(mapSections),
      label: horoscope.tableName,
      value: horoscope.tableName
    };
  }));
};

export const getMaps = async ({ userName, latitude, longitude, date, time }: HoroscopeData) => {
  const { data } = await axios.post('https://backm.alpha-astro.ru/horoscope/get-horoscope/', {
    name_user: userName,
    longitude,
    latitude,
    dt: date.split('.').reverse().join('-') + 'T' + time,
    part_world: null,
    tz_hour: null,
    tz_minutes: null
  });

  return getFormattedMaps(data.data);
};
