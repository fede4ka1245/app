import { CurrentDeepSkyObject } from './CurrentDeepSkyObject';
import { ZodiacSign } from '../enums/ZodiacSign';

interface RashiPlanet {
  name: string,
  additionalInfo: string,
  isRetragraded: boolean
}

export interface RashiTableRow {
  planet: RashiPlanet,
  sign: ZodiacSign,
  degrees: number,
  minutes: number,
  naksantra: {
    mainInfo: string,
    additionalInfo: string
  },
  deepSkyObject?: CurrentDeepSkyObject
}
