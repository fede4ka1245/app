import React, { useMemo } from 'react';
import { useGetRashiTable } from '../../../../../store/selectors';
import RashiTable from '../../../../../components/rashiTable/RashiTable';
import { RashiTableParts } from '../../../../../models/types/RashiTable';

const Bhava = () => {
  const rashiTable = useGetRashiTable();

  const table = useMemo(() => {
    return rashiTable.find((rashiTableItem) => rashiTableItem.tableName === 'D-1')?.table as RashiTableParts;
  }, [rashiTable]);

  return (
    <RashiTable table={table} />
  );
};

export default Bhava;
