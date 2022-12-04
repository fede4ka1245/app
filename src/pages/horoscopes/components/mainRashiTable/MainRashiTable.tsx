import React, { useMemo } from 'react';
import RashiTable from '../../../../components/rashiTable/RashiTable';
import {
  useGetIsDeepSkyActive,
  useGetIsRashiTableLoading,
  useGetRashiTable,
  useGetTargetMapValue
} from '../../../../store/selectors';
import HoroscopesLoader from '../horoscopeLoader/HoroscopesLoader';

const MainRashiTable = () => {
  const rashiTable = useGetRashiTable();
  const targetMapValue = useGetTargetMapValue();
  const isLoading = useGetIsRashiTableLoading();

  const rows = useMemo(() => {
    return rashiTable.find((rashiTableItem) => rashiTableItem.tableName === targetMapValue)?.table.primaryData || [];
  }, [rashiTable, targetMapValue]);

  const isDeepSkyActive = useGetIsDeepSkyActive();

  return (
    <>
      {!isLoading && <RashiTable rows={rows} isDeepSkyActive={isDeepSkyActive}/>}
      {isLoading && <HoroscopesLoader />}
    </>
  );
};

export default MainRashiTable;
