import { AddressInformation } from '../../../models/types/AddressInformation';
// @ts-ignore
import ts from '@mapbox/timespace';

export const formatSuggestions = (suggestions: Array<any>): Array<AddressInformation> => {
  return suggestions.map((suggestion) => {
    const timestamp = Date.now();
    const point = [suggestion?.data?.geo_lon, suggestion?.data?.geo_lat];
    const time = ts.getFuzzyLocalTimeFromPoint(timestamp, point);
    const timeZoneOffset = time?.format ? time?.format().slice(-6) : undefined;

    return {
      latitude: suggestion?.data?.geo_lat,
      longitude: suggestion?.data?.geo_lon,
      value: suggestion?.value,
      timeZoneOffset
    };
  });
};
