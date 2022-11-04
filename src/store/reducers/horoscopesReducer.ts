import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getMapsOptions } from '../../helpers/getMapsOptions';
import { HoroscopeData } from '../../models/types/HoroscopeData';
import { MapOption } from '../../models/types/MapOption';
import { DashiTableRow } from '../../models/types/DashiTableRow';
import { AshtakavargaTable } from '../../models/types/AshtakavargaTable';
import { RashiTable } from '../../models/types/RashiTable';

interface HoroscopeUserInfo extends HoroscopeData {
  location: string,
  greenwich: string,
  hours: string,
  minutes: string
}

interface HoroscopeState {
  maps: Array<MapOption>,
  targetMapValue: string,
  horoscopeUserInfo: HoroscopeUserInfo,
  dashiVim: DashiTableRow[],
  dashiChr: DashiTableRow[],
  isDashiLoading: boolean,
  ashtakavarga: AshtakavargaTable[],
  isAshtakavargaLoading: boolean,
  rashiTable: RashiTable
}

export const horoscopesSlice = createSlice({
  name: 'horoscope',
  initialState: {
    maps: getMapsOptions(),
    targetMapValue: getMapsOptions()[0].value,
    horoscopeUserInfo: {
      userName: '',
      longitude: '',
      latitude: '',
      date: '',
      time: '',
      location: '',
      greenwich: '',
      hours: '',
      minutes: ''
    },
    dashiVim: [],
    dashiChr: [],
    isDashiLoading: false,
    ashtakavarga: [],
    isAshtakavargaLoading: false,
    rashiTable: []
  } as HoroscopeState,
  reducers: {
    setMaps: (state, action) => {
      state.maps = action.payload;
    },
    setTargetMapValue: (state, action) => {
      state.targetMapValue = action.payload;
    },
    setHoroscopeUserInfo: (state, action: PayloadAction<HoroscopeUserInfo>) => {
      state.horoscopeUserInfo = action.payload;
    },
    setDashiVim: (state, action: PayloadAction<DashiTableRow[]>) => {
      state.dashiVim = action.payload;
    },
    setDashiChr: (state, action: PayloadAction<DashiTableRow[]>) => {
      state.dashiChr = action.payload;
    },
    setIsDashiLoading: (state, action: PayloadAction<boolean>) => {
      state.isDashiLoading = action.payload;
    },
    setAshtakavarga: (state, action: PayloadAction<AshtakavargaTable[]>) => {
      state.ashtakavarga = action.payload;
    },
    setIsAshtakavargaLoading: (state, action: PayloadAction<boolean>) => {
      state.isAshtakavargaLoading = action.payload;
    },
    setRashiTable: (state, action: PayloadAction<RashiTable>) => {
      state.rashiTable = action.payload;
    }
  }
});

export const { setMaps, setTargetMapValue, setRashiTable, setHoroscopeUserInfo, setDashiVim, setDashiChr, setIsDashiLoading, setAshtakavarga, setIsAshtakavargaLoading } = horoscopesSlice.actions;

export default horoscopesSlice.reducer;
