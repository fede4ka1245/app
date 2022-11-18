import { DeepSkyObject } from './DeepSkyObject';
import { DeepSkyYear } from './DeepSkyYear';

export interface CurrentDeepSkyObject extends Omit<DeepSkyObject, 'years'> {
  year: DeepSkyYear
}
