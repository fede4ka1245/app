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
  table: {
    primaryData: RashiTableRow [],
    primaryUpagraha: RashiTableRow [],
    secondaryUpagraha: RashiTableRow [],
    transsaturnData: RashiTableRow [],
    specialLagna: RashiTableRow [],
  }
}

export type RashiTable = Array<RashiTableItem>;
