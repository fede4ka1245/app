import { CurrentDeepSkyObject } from './CurrentDeepSkyObject';

export interface MapSection {
  mainInfo: string,
  additionalInfo: string,
  index: number,
  number: number,
  deepSkyObject?: CurrentDeepSkyObject,
  isDeepSkyActive?: boolean
}
