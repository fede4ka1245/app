import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Zone } from '../../models/types/Zone';
import { SavatobhadraTableRow } from '../../models/types/SavatobhadraTableRow';

interface ZoneState {
  savatobhadra: SavatobhadraTableRow [],
  shani: Zone [],
  calanala: Zone [],
  compass: Zone [],
  isZonesLoading: boolean,
}

const zonesReducer = createSlice({
  name: 'zones',
  initialState: {
    savatobhadra: [],
    shani: [],
    calanala: [],
    compass: [],
    isZonesLoading: false
  } as ZoneState,
  reducers: {
    setSavatobhadra: (state, action: PayloadAction<SavatobhadraTableRow []>) => {
      state.savatobhadra = action.payload;
    },
    setIsZonesLoading: (state, action: PayloadAction<boolean>) => {
      state.isZonesLoading = action.payload;
    },
    setCalanala: (state, action: PayloadAction<Zone []>) => {
      state.calanala = action.payload;
    },
    setCompass: (state, action: PayloadAction<Zone []>) => {
      state.compass = action.payload;
    },
    setShani: (state, action: PayloadAction<Zone []>) => {
      state.shani = action.payload;
    }
  }
});

export const { setSavatobhadra, setIsZonesLoading, setCalanala, setShani, setCompass } = zonesReducer.actions;

export default zonesReducer.reducer;
