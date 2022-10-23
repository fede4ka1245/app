import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getMapsOptions } from '../../helpers/getMapsOptions';
import { HoroscopeData } from '../../models/types/HoroscopeData';
import { MapOption } from '../../models/types/MapOption';

interface HoroscopeUserInfo extends HoroscopeData {
  location: string,
  timeZoneOffset: string
}

interface HoroscopeState {
  maps: Array<MapOption>,
  targetMapValue: string,
  horoscopeUserInfo: HoroscopeUserInfo
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
    }
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
    }
  }
});

export const { setMaps, setTargetMapValue, setHoroscopeUserInfo } = horoscopesSlice.actions;

export default horoscopesSlice.reducer;
