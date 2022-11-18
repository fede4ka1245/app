import { CurrentDeepSkyObject } from './CurrentDeepSkyObject';

interface RashiPlanet {
  name: string,
  additionalInfo: string,
  isRetragraded: boolean
}

export interface RashiTableRow {
  planet: RashiPlanet,
  sign: string,
  degrees: number,
  minutes: number,
  naksantra: {
    mainInfo: string,
    additionalInfo: string
  },
  deepSkyObject?: CurrentDeepSkyObject
}
