import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SavedHoroscope } from '../../models/types/SavedHoroscopes';

interface SavedHoroscopesState {
  savedHoroscopes: SavedHoroscope [],
}

const savedHoroscopesReducer = createSlice({
  name: 'savedHoroscopes',
  initialState: {
    savedHoroscopes: []
  } as SavedHoroscopesState,
  reducers: {
    setSavedHoroscopes: (state, action: PayloadAction<SavedHoroscope []>) => {
      state.savedHoroscopes = action.payload;
    },
    saveHoroscope: (state, action: PayloadAction<SavedHoroscope>) => {
      state.savedHoroscopes = [...state.savedHoroscopes, action.payload];
    }
  }
});

export const { setSavedHoroscopes, saveHoroscope } = savedHoroscopesReducer.actions;

export default savedHoroscopesReducer.reducer;
