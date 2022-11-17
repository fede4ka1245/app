import { RashiTableRow } from '../models/types/RashiTableRow';
import camelcaseKeys from 'camelcase-keys';
import { RashiTable } from '../models/types/RashiTable';

export const getFormtattedRashiRow = (rasiTable: Array<any>): RashiTableRow [] => {
  return [...rasiTable.map((tableItem: any) => {
    return {
      ...tableItem,
      planet: tableItem.planet,
      sign: tableItem.rashi,
      sphuta: tableItem.cpuxuta[0].slice(0, -4),
      naksantra: tableItem.naksantra
    };
  })];
};

export const getFormattedRashiTable = (table: any) : RashiTable => {
  return Array.from(camelcaseKeys(table, { deep: true }).map((rashiTable: any) => ({
    table: {
      primaryData: getFormtattedRashiRow(rashiTable.table.primaryData),
      primaryUpagraha: getFormtattedRashiRow(rashiTable.table.primaryUpagraha),
      secondaryUpagraha: getFormtattedRashiRow(rashiTable.table.secondaryUpagraha),
      transsaturnData: getFormtattedRashiRow(rashiTable.table.transsaturnData),
      specialLagna: getFormtattedRashiRow(rashiTable.table.specialLagna)
    },
    tableName: rashiTable.tableName.includes('-') ? rashiTable.tableName : rashiTable.tableName.replace('D', 'D-')
  })));
};
