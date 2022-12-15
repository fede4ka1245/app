import { RashiTableRow } from './RashiTableRow';

export interface RashiTableParts {
  primaryData: RashiTableRow [],
  primaryUpagraha: RashiTableRow [],
  secondaryUpagraha: RashiTableRow [],
  transsaturnData: RashiTableRow [],
  specialLagna: RashiTableRow [],
}

export interface RashiTableItem {
  tableName: string,
  table: RashiTableParts
}

export type RashiTable = Array<RashiTableItem>;
