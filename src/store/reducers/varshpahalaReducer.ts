import { createSlice } from '@reduxjs/toolkit';

const varshpahalaReducer = createSlice({
  name: 'horoscope',
  initialState: {
    isVarshpahalaLoading: false,
    dashiTable: [],
    yogasTable: [],
    yearMasterTable: []
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
    }
  }
});

export const { setDashiTable, setYogasTable, setYearMasterTable, setIsVarshpahalaLoading } = varshpahalaReducer.actions;

export default varshpahalaReducer.reducer;
