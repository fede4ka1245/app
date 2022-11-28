import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DashiTableRow } from '../../models/types/DashiTableRow';
import { YogaTableRow } from '../../models/types/YogaTable';
import { YearMasterTableRow } from '../../models/types/YearMasterTableRow';
import { MapOption } from '../../models/types/MapOption';
import { RashiTable } from '../../models/types/RashiTable';

interface VarshpahalaState {
  isVarshpahalaLoading: boolean,
  dashiTable: DashiTableRow[],
  yogasTable: YogaTableRow[],
  yearMasterTable: YearMasterTableRow [],
  yearMaster: string,
  varshpahalaRashiTable: RashiTable,
  isYearPickerActive: boolean,
  varshpahalaMaps: MapOption [],
  varshpahalaDate: string,
  muntkha: string
}

const varshpahalaReducer = createSlice({
  name: 'horoscope',
  initialState: {
    isVarshpahalaLoading: false,
    dashiTable: [],
    yogasTable: [],
    yearMasterTable: [],
    yearMaster: '',
    varshpahalaRashiTable: [],
    isYearPickerActive: true,
    varshpahalaMaps: [],
    varshpahalaDate: '',
    muntkha: ''
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
    setVarshpahalaRashiTable: (state, action: PayloadAction<RashiTable>) => {
      state.varshpahalaRashiTable = action.payload;
    },
    setIsYearPickerActive: (state, action: PayloadAction<boolean>) => {
      state.isYearPickerActive = action.payload;
    },
    setVarshpahalaMaps: (state, action: PayloadAction<MapOption []>) => {
      state.varshpahalaMaps = action.payload;
    },
    setVarshpahalaDate: (state, action: PayloadAction<string>) => {
      state.varshpahalaDate = action.payload;
    },
    setMuntkha: (state, action: PayloadAction<string>) => {
      state.muntkha = action.payload;
    }
  }
});

export const { setDashiTable, setYogasTable, setYearMasterTable, setMuntkha, setVarshpahalaDate, setIsVarshpahalaLoading, setVarshpahalaMaps, setYearMaster, setVarshpahalaRashiTable, setIsYearPickerActive } = varshpahalaReducer.actions;

export default varshpahalaReducer.reducer;
