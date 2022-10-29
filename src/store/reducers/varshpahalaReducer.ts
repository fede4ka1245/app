import { createSlice } from '@reduxjs/toolkit';

const varshpahalaReducer = createSlice({
  name: 'horoscope',
  initialState: {
    isVarshpahalaLoading: false,
    dashiTable: [],
    yogasTable: [],
    yearMasterTable: [],
    yearMaster: '',
    rashiTable: []
  },
  reducers: {
    setDashiTable: (state, action) => {
      state.dashiTable = action.payload;
    },
    setYogasTable: (state, action) => {
      state.yogasTable = action.payload;
    },
    setYearMasterTable: (state, action) => {
      state.yearMasterTable = action.payload;
    },
    setIsVarshpahalaLoading: (state, action) => {
      state.isVarshpahalaLoading = action.payload;
    },
    setYearMaster: (state, action) => {
      state.yearMaster = action.payload;
    },
    setRashiTable: (state, action) => {
      state.rashiTable = action.payload;
    }
  }
});

export const { setDashiTable, setYogasTable, setYearMasterTable, setIsVarshpahalaLoading, setYearMaster, setRashiTable } = varshpahalaReducer.actions;

export default varshpahalaReducer.reducer;
