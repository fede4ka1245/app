import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface preferencesState {
  isNavbarActive: boolean,
  isAppLoading: boolean,
  contentRef?: HTMLElement,
  isAuthenticated: boolean,
}

export const preferencesSlice = createSlice({
  name: 'app',
  initialState: {
    isNavbarActive: true,
    isAppLoading: false,
    isAuthenticated: false,
    contentRef: undefined
  } as preferencesState,
  reducers: {
    setIsNavbarActive: (state, action: PayloadAction<boolean>) => {
      state.isNavbarActive = action.payload;
    },
    setIsAppLoading: (state, action: PayloadAction<boolean>) => {
      state.isAppLoading = action.payload;
    },
    setContentRef: (state, action: PayloadAction<any>) => {
      state.contentRef = action.payload;
    },
    setIsAuthenticated: (state, action: PayloadAction<boolean>) => {
      state.isAuthenticated = action.payload;
    }
  }
});

export const { setIsNavbarActive, setIsAppLoading, setContentRef, setIsAuthenticated } = preferencesSlice.actions;

export default preferencesSlice.reducer;
