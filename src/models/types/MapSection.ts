import { CurrentDeepSkyObject } from './CurrentDeepSkyObject';

export interface MapSection {
  house: number,
  signId: number
  arudhs: string [],
  grahaDrishti: string [],
  mandyGulika: string [],
  primaryData: string [],
  specialLagna: string []
  transsaturns: string []
  upagraha: string []
  deepSkyObject?: CurrentDeepSkyObject,
  isDeepSkyActive?: boolean
}
