import { DeepSkyYear } from './DeepSkyYear';

export interface DeepSkyObject {
  id: number,
  years: DeepSkyYear [],
  title: string,
  constellation: string,
  comment: string,
  stellarObjectType: number,
  imageUrl?: string,
  area: string
}
