import React, { useMemo } from 'react';
import RashiTable from '../../../../components/rashiTable/RashiTable';
import {
  useGetIsDeepSkyActive,
  useGetIsRashiTableLoading,
  useGetRashiTable,
  useGetTargetMapValue
} from '../../../../store/selectors';
import HoroscopesLoader from '../horoscopeLoader/HoroscopesLoader';
import { RashiTableParts } from '../../../../models/types/RashiTable';

const MainRashiTable = () => {
  const rashiTable = useGetRashiTable();
  const targetMapValue = useGetTargetMapValue();
  const isLoading = useGetIsRashiTableLoading();

  const table = useMemo<RashiTableParts>(() => {
    return rashiTable.find((rashiTableItem) => rashiTableItem.tableName === targetMapValue)?.table as RashiTableParts;
  }, [rashiTable, targetMapValue]);

  const isDeepSkyActive = useGetIsDeepSkyActive();

  return (
    <>
      {!isLoading && <RashiTable table={table} isDeepSkyActive={isDeepSkyActive}/>}
      {isLoading && <HoroscopesLoader />}
    </>
  );
};

export default MainRashiTable;
