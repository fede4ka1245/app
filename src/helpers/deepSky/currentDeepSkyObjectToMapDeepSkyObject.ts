import { CurrentDeepSkyObject } from '../../models/types/CurrentDeepSkyObject';
import { MapDeepSkyObject } from '../../models/types/MapDeepSkyObject';

export const currentDeepSkyObjectToMapDeepSkyObject = (object?: CurrentDeepSkyObject): MapDeepSkyObject | undefined => {
  if (!object || !object?.year?.tropicalSign) {
    return;
  }

  return {
    stellarObjectType: object?.stellarObjectType,
    signDegrees: {
      sign: object.year.tropicalSign,
      minutes: object.year.tropicalMinutes,
      degrees: object.year.tropicalSigndegree
    }
  };
};
