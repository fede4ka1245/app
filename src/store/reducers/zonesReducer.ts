import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Zone } from '../../models/types/Zone';
import { SavatobhadraTableRow } from '../../models/types/SavatobhadraTableRow';
import { SudarshanaItem } from '../../models/types/SudarshanaItem';

interface ZoneState {
  savatobhadra: SavatobhadraTableRow [],
  shani: Zone [],
  calanala: Zone [],
  compass: Zone [],
  isZonesLoading: boolean,
  sudarshana: SudarshanaItem [],
}

const initialState = {
  savatobhadra: [],
  shani: [],
  calanala: [],
  compass: [],
  isZonesLoading: false,
  sudarshana: []
} as ZoneState;

const zonesReducer = createSlice({
  name: 'zones',
  initialState,
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
    },
    setSudarshana: (state, action: PayloadAction<SudarshanaItem []>) => {
      state.sudarshana = action.payload;
    },
    resetZones: () => initialState
  }
});

export const { setSavatobhadra, resetZones, setIsZonesLoading, setCalanala, setShani, setCompass, setSudarshana } = zonesReducer.actions;

export default zonesReducer.reducer;
