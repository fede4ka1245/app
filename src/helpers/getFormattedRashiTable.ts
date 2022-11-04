import { RashiTableRow } from '../models/types/RashiTableRow';

export const getFormattedRashiTable = (rasiTable: Array<any>): RashiTableRow [] => {
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
