import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MapOption } from '../../models/types/MapOption';
import { RashiTable } from '../../models/types/RashiTable';
import { TransitionsParams } from '../../models/types/transitions/transitionsParams';
import { TransitionsTableRow } from '../../models/types/TransitionsTableRow';
import { TransitionsPlanet } from '../../models/types/transitions/transitionsPlanet';

interface TransitionState {
  transitionMaps: Array<MapOption>,
  transitionDate: string,
  transitionTime: string,
  isTransitionMapsActive: boolean,
  rashiTable: RashiTable,
  isRashiTableLoading: boolean,
  transitionParams: TransitionsParams,
  transitionTable: TransitionsTableRow [],
  isTransitionTableLoading: boolean,
  targetPlanets: TransitionsPlanet []
}

const initialState = {
  transitionMaps: [],
  transitionDate: '',
  transitionTime: '',
  isTransitionMapsActive: false,
  transitionParams: {
    transitionsPlanetsParams: [],
    transitionsPositionsParams: []
  },
  rashiTable: [],
  isRashiTableLoading: false,
  transitionTable: [],
  isTransitionTableLoading: false,
  targetPlanets: []
} as TransitionState;

export const transitionSlice = createSlice({
  name: 'transition',
  initialState,
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
    },
    setIsTransitionRashiTableLoading: (state, action: PayloadAction<boolean>) => {
      state.isRashiTableLoading = action.payload;
    },
    setTransitionRashiTable: (state, action: PayloadAction<RashiTable>) => {
      state.rashiTable = action.payload;
    },
    setTransitionParams: (state, action: PayloadAction<TransitionsParams>) => {
      state.transitionParams = action.payload;
    },
    setTransitionTable: (state, action: PayloadAction<TransitionsTableRow []>) => {
      state.transitionTable = action.payload;
    },
    setIsTransitionTableLoading: (state, action: PayloadAction<boolean>) => {
      state.isTransitionTableLoading = action.payload;
    },
    setTargetPlanets: (state, action: PayloadAction<TransitionsPlanet []>) => {
      state.targetPlanets = action.payload;
    },
    resetTransitions: () => initialState
  }
});

export const {
  setTransitionTable,
  setTargetPlanets,
  setIsTransitionTableLoading,
  setTransitionMaps,
  setTransitionParams,
  setTransitionRashiTable,
  setIsTransitionRashiTableLoading,
  resetTransitions,
  setTransitionDate,
  setTransitionTime,
  setIsTransitionMapsActive
} = transitionSlice.actions;

export default transitionSlice.reducer;
