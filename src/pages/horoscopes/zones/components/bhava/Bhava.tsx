import React, { useMemo } from 'react';
import { useGetRashiTable } from '../../../../../store/selectors';
import RashiTable from '../../../../../components/rashiTable/RashiTable';

const Bhava = () => {
  const rashiTable = useGetRashiTable();

  const rows = useMemo(() => {
    return rashiTable.find((rashiTableItem) => rashiTableItem.tableName === 'D-1')?.table.primaryData || [];
  }, [rashiTable]);

  return (
    <RashiTable rows={rows} />
  );
};

export default Bhava;
