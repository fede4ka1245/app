import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MapType } from '../../models/types/MapType';
import { HoroscopeHelpersElements } from '../../models/enums/HoroscopeHelpersElements';
import { Language } from '../../models/enums/Language';

interface settingsState {
  mapType: MapType,
  helpersElements: HoroscopeHelpersElements [],
  language: Language,
  isEarthActive: boolean
}

export const settingsSlice = createSlice({
  name: 'settings',
  initialState: {
    mapType: 'NORTH',
    helpersElements: [...Object.values(HoroscopeHelpersElements)].slice(Object.values(HoroscopeHelpersElements).length / 2),
    language: Language.Ru,
    isEarthActive: false
  } as settingsState,
  reducers: {
    setMapType: (state, action: PayloadAction<MapType>) => {
      state.mapType = action.payload;
    },
    setHelpersElements: (state, action: PayloadAction<HoroscopeHelpersElements []>) => {
      state.helpersElements = action.payload;
    },
    addHelpersElement: (state, action: PayloadAction<HoroscopeHelpersElements>) => {
      state.helpersElements = [...state.helpersElements, action.payload];
    },
    removeHelperElement: (state, action: PayloadAction<HoroscopeHelpersElements>) => {
      state.helpersElements = [...state.helpersElements].filter((element) => element !== action.payload);
    },
    setLanguage: (state, action: PayloadAction<Language>) => {
      state.language = action.payload;
    },
    toggleEarth: (state) => {
      state.isEarthActive = !state.isEarthActive;
    },
    setIsEarthActive: (state, action: PayloadAction<boolean>) => {
      state.isEarthActive = action.payload;
    }
  }
});

export const { setMapType, setLanguage, setHelpersElements, setIsEarthActive } = settingsSlice.actions;

export default settingsSlice.reducer;
