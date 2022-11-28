import { MapOption } from '../models/types/MapOption';
import { getMapsOptions } from './getMapsOptions';
import { MapSection } from '../models/types/MapSection';

export const getFormattedMaps = (horoscopes: any): MapOption[] => {
  const mapOptions = getMapsOptions();

  const filteredMaps = horoscopes.filter((horoscope: any) => {
    return !!mapOptions.find((option) => option.value === horoscope.tableName);
  });

  return Array.from(filteredMaps.map((horoscope: any) => {
    const mapSections: MapSection [] = horoscope.table.map((tableItem: any) => {
      return {
        ...tableItem,
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
