import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DeepSkyObject } from '../../models/types/DeepSkyObject';

interface deepSkyState {
  isDeepSkyActive: boolean,
  deepSkyObjects: DeepSkyObject [],
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
    setDeepSkyObjects: (state, action: PayloadAction<DeepSkyObject []>) => {
      state.deepSkyObjects = action.payload;
    }
  }
});

export const { setIsDeepSkyActive, setDeepSkyObjects } = deepSkyReducer.actions;

export default deepSkyReducer.reducer;
