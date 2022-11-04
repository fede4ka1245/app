import { RashiTableRow } from './RashiTableRow';

export interface RashiTableItem {
  mapName: string,
  table: RashiTableRow[]
}

export type RashiTable = Array<RashiTableItem>;
