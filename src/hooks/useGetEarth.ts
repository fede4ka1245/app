import { useGetRashiTable, useGetTargetMapValue } from '../store/selectors';
import { useMemo } from 'react';
import { getEarthDegreesValue } from '../helpers/deepSky/getEarthDegreesValue';
import { MapDeepSkyObject } from '../models/types/MapDeepSkyObject';
import { StellarObjectType } from '../models/enums/StellarObjectType';

export const useGetEarth = () => {
  const rashiTable = useGetRashiTable();
  const targetMapValue = useGetTargetMapValue();

  const rashiTableCurrentRows = useMemo(() => {
    return rashiTable.find((rashiTableItem) => rashiTableItem.tableName === targetMapValue)?.table.primaryData || [];
  }, [rashiTable, targetMapValue]);

  return useMemo((): MapDeepSkyObject | undefined => {
    const sun = rashiTableCurrentRows.find((row) => row.planet.name.toLowerCase() === 'солнце');

    if (!sun) {
      return;
    }

    const signDegrees = getEarthDegreesValue({ sign: sun.sign, degrees: sun.degrees, minutes: sun.minutes });

    return {
      signDegrees,
      stellarObjectType: StellarObjectType.Earth
    };
  }, [rashiTableCurrentRows]);
};
