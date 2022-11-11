import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MapType } from '../../models/types/MapType';

interface settingsState {
  mapType: MapType,
}

export const settingsSlice = createSlice({
  name: 'settings',
  initialState: {
    mapType: 'NORTH'
  } as settingsState,
  reducers: {
    setMapType: (state, action: PayloadAction<MapType>) => {
      state.mapType = action.payload;
    }
  }
});

export const { setMapType } = settingsSlice.actions;

export default settingsSlice.reducer;
