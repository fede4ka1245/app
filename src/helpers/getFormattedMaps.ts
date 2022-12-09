import { MapOption } from '../models/types/MapOption';
import { getMapsOptions } from './getMapsOptions';

export const getFormattedMaps = (horoscopes: any): MapOption[] => {
  const mapOptions = getMapsOptions();

  const filteredMaps = horoscopes.filter((horoscope: any) => {
    return !!mapOptions.find((option) => option.value === horoscope.tableName);
  });

  return Array.from(filteredMaps.map((horoscope: any) => {
    return {
      mapSections: horoscope.table,
      label: horoscope.tableName,
      value: horoscope.tableName
    };
  }));
};
