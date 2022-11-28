import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CurrentDeepSkyObject } from '../../models/types/CurrentDeepSkyObject';

interface deepSkyState {
  isDeepSkyActive: boolean,
  deepSkyObjects: CurrentDeepSkyObject [],
}

const deepSkyReducer = createSlice({
  name: 'settings',
  initialState: {
    isDeepSkyActive: false,
    deepSkyObjects: []
  } as deepSkyState,
  reducers: {
    setIsDeepSkyActive: (state, action: PayloadAction<boolean>) => {
      state.isDeepSkyActive = action.payload;
    },
    setDeepSkyObjects: (state, action: PayloadAction<CurrentDeepSkyObject []>) => {
      state.deepSkyObjects = action.payload;
    }
  }
});

export const { setIsDeepSkyActive, setDeepSkyObjects } = deepSkyReducer.actions;

export default deepSkyReducer.reducer;
