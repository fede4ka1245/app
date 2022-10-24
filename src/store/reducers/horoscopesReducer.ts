import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getMapsOptions } from '../../helpers/getMapsOptions';
import { HoroscopeData } from '../../models/types/HoroscopeData';
import { MapOption } from '../../models/types/MapOption';
import { PlanetTableRow } from '../../models/types/PlanetTableRow';

interface HoroscopeUserInfo extends HoroscopeData {
  location: string,
  timeZoneOffset: string
}

interface HoroscopeState {
  maps: Array<MapOption>,
  targetMapValue: string,
  horoscopeUserInfo: HoroscopeUserInfo,
  dashiVim: PlanetTableRow[],
  dashiChr: PlanetTableRow[],
  isDashiLoading: boolean,
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
      timeZoneOffset: ''
    },
    dashiVim: [],
    dashiChr: [],
    isDashiLoading: false
  } as unknown as HoroscopeState,
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
    setDashiVim: (state, action: PayloadAction<PlanetTableRow[]>) => {
      state.dashiVim = action.payload;
    },
    setDashiChr: (state, action: PayloadAction<PlanetTableRow[]>) => {
      state.dashiChr = action.payload;
    },
    setIsDashiLoading: (state, action: PayloadAction<boolean>) => {
      state.isDashiLoading = action.payload;
    }
  }
});

export const { setMaps, setTargetMapValue, setHoroscopeUserInfo, setDashiVim, setDashiChr, setIsDashiLoading } = horoscopesSlice.actions;

export default horoscopesSlice.reducer;
