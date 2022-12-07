import { AshtakavargaTableRow } from './AshtakavargaTableRow';
import { MapType } from './MapType';

export interface AshtakavargaTable {
  tableName: string,
  table: AshtakavargaTableRow [],
  mapType: MapType,
  firstHouse?: number
}
