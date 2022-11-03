import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DashiTableRow } from '../../models/types/DashiTableRow';
import { YogaTableRow } from '../../models/types/YogaTable';
import { YearMasterTableRow } from '../../models/types/YearMasterTableRow';
import { RashiTableRow } from '../../models/types/RashiTableRow';

interface VarshpahalaState {
  isVarshpahalaLoading: boolean,
  dashiTable: DashiTableRow[],
  yogasTable: YogaTableRow[],
  yearMasterTable: YearMasterTableRow [],
  yearMaster: string,
  rashiTable: RashiTableRow [],
  isYearPickerActive: boolean,
}

const varshpahalaReducer = createSlice({
  name: 'horoscope',
  initialState: {
    isVarshpahalaLoading: false,
    dashiTable: [],
    yogasTable: [],
    yearMasterTable: [],
    yearMaster: '',
    rashiTable: [],
    isYearPickerActive: true
  } as VarshpahalaState,
  reducers: {
    setDashiTable: (state, action: PayloadAction<DashiTableRow []>) => {
      state.dashiTable = action.payload;
    },
    setYogasTable: (state, action: PayloadAction<YogaTableRow []>) => {
      state.yogasTable = action.payload;
    },
    setYearMasterTable: (state, action: PayloadAction<YearMasterTableRow []>) => {
      state.yearMasterTable = action.payload;
    },
    setIsVarshpahalaLoading: (state, action: PayloadAction<boolean>) => {
      state.isVarshpahalaLoading = action.payload;
    },
    setYearMaster: (state, action: PayloadAction<string>) => {
      state.yearMaster = action.payload;
    },
    setRashiTable: (state, action: PayloadAction<RashiTableRow []>) => {
      state.rashiTable = action.payload;
    },
    setIsYearPickerActive: (state, action: PayloadAction<boolean>) => {
      state.isYearPickerActive = action.payload;
    }
  }
});

export const { setDashiTable, setYogasTable, setYearMasterTable, setIsVarshpahalaLoading, setYearMaster, setRashiTable, setIsYearPickerActive } = varshpahalaReducer.actions;

export default varshpahalaReducer.reducer;
