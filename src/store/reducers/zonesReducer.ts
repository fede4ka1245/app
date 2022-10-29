import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Zone } from '../../models/types/Zone';
import { SavatobhadraTableRow } from '../../models/types/SavatobhadraTableRow';
import { SudarshanaItem } from '../../models/types/SudarshanaItem';
import { BhavaTableRow } from '../../models/types/BhavaTableRow';

interface ZoneState {
  savatobhadra: SavatobhadraTableRow [],
  shani: Zone [],
  calanala: Zone [],
  compass: Zone [],
  isZonesLoading: boolean,
  sudarshana: SudarshanaItem [],
  bhava: BhavaTableRow [],
}

const zonesReducer = createSlice({
  name: 'zones',
  initialState: {
    savatobhadra: [],
    shani: [],
    calanala: [],
    compass: [],
    isZonesLoading: false,
    sudarshana: [],
    bhava: []
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
    },
    setSudarshana: (state, action: PayloadAction<SudarshanaItem []>) => {
      state.sudarshana = action.payload;
    },
    setBhava: (state, action: PayloadAction<BhavaTableRow []>) => {
      state.bhava = action.payload;
    }
  }
});

export const { setSavatobhadra, setIsZonesLoading, setCalanala, setShani, setCompass, setSudarshana, setBhava } = zonesReducer.actions;

export default zonesReducer.reducer;
