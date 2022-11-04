import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MapOption } from '../../models/types/MapOption';

interface TransitionState {
  transitionMaps: Array<MapOption>,
  transitionDate: string,
  transitionTime: string,
  isTransitionMapsActive: boolean
}

export const transitionSlice = createSlice({
  name: 'transition',
  initialState: {
    transitionMaps: [],
    transitionDate: '',
    transitionTime: '',
    isTransitionMapsActive: false
  } as TransitionState,
  reducers: {
    setTransitionMaps: (state, action: PayloadAction<Array<MapOption>>) => {
      state.transitionMaps = action.payload;
    },
    setTransitionDate: (state, action: PayloadAction<string>) => {
      state.transitionDate = action.payload;
    },
    setTransitionTime: (state, action: PayloadAction<string>) => {
      state.transitionTime = action.payload;
    },
    setIsTransitionMapsActive: (state, action: PayloadAction<boolean>) => {
      state.isTransitionMapsActive = action.payload;
    }
  }
});

export const { setTransitionMaps, setTransitionDate, setTransitionTime, setIsTransitionMapsActive } = transitionSlice.actions;

export default transitionSlice.reducer;
