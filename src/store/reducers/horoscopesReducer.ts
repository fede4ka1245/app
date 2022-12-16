import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getMapsOptions } from '../../helpers/getMapsOptions';
import { HoroscopeData } from '../../models/types/HoroscopeData';
import { MapOption } from '../../models/types/MapOption';
import { AshtakavargaTable } from '../../models/types/AshtakavargaTable';
import { RashiTable } from '../../models/types/RashiTable';
import { AddressSuggestion } from '../../models/types/AddressSuggestion';
import { DashiReturnType } from '../../models/types/GetDashi';

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
  dashiVim?: DashiReturnType,
  dashiChr?: DashiReturnType,
  isDashiChrPeriodLoading: boolean,
  isDashiChrLoading: boolean,
  isDashiVimLoading: boolean,
  ashtakavarga: AshtakavargaTable[],
  isAshtakavargaLoading: boolean,
  rashiTable: RashiTable,
  addressInformation?: AddressSuggestion,
  isRashiTableLoading: boolean
}

const initialState: HoroscopeState = {
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
  dashiVim: undefined,
  dashiChr: undefined,
  isRashiTableLoading: false,
  isDashiChrLoading: false,
  isDashiVimLoading: false,
  ashtakavarga: [],
  isAshtakavargaLoading: false,
  rashiTable: [],
  isDashiChrPeriodLoading: false,
  addressInformation: undefined
} as HoroscopeState;

export const horoscopesSlice = createSlice({
  name: 'horoscope',
  initialState,
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
    setDashiVim: (state, action: PayloadAction<DashiReturnType>) => {
      state.dashiVim = action.payload;
    },
    setDashiChr: (state, action: PayloadAction<DashiReturnType>) => {
      state.dashiChr = action.payload;
    },
    setIsChrDashiLoading: (state, action: PayloadAction<boolean>) => {
      state.isDashiChrLoading = action.payload;
    },
    setIsVimDashiLoading: (state, action: PayloadAction<boolean>) => {
      state.isDashiVimLoading = action.payload;
    },
    setAshtakavarga: (state, action: PayloadAction<AshtakavargaTable[]>) => {
      state.ashtakavarga = action.payload;
    },
    setIsAshtakavargaLoading: (state, action: PayloadAction<boolean>) => {
      state.isAshtakavargaLoading = action.payload;
    },
    setRashiTable: (state, action: PayloadAction<RashiTable>) => {
      state.rashiTable = action.payload;
    },
    setIsDashiChrPeriodLoading: (state, action: PayloadAction<boolean>) => {
      state.isDashiChrPeriodLoading = action.payload;
    },
    setAddressInformation: (state, action: PayloadAction<AddressSuggestion>) => {
      state.addressInformation = action.payload;
    },
    setIsRashiTableLoading: (state, action: PayloadAction<boolean>) => {
      state.isRashiTableLoading = action.payload;
    },
    resetHoroscopes: () => initialState
  }
});

export const { setMaps, resetHoroscopes, setIsRashiTableLoading, setTargetMapValue, setAddressInformation, setIsDashiChrPeriodLoading, setRashiTable, setHoroscopeUserInfo, setDashiVim, setDashiChr, setIsChrDashiLoading, setIsVimDashiLoading, setAshtakavarga, setIsAshtakavargaLoading } = horoscopesSlice.actions;

export default horoscopesSlice.reducer;
