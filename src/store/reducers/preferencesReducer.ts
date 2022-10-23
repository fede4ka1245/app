import { createSlice } from '@reduxjs/toolkit';

interface preferencesState {
  isNavbarActive: boolean
}

export const preferencesSlice = createSlice({
  name: 'app',
  initialState: {
    isNavbarActive: true,
    isAppLoading: false
  },
  reducers: {
    setIsNavbarActive: (state, action) => {
      state.isNavbarActive = action.payload;
    },
    setIsAppLoading: (state, action) => {
      state.isAppLoading = action.payload;
    }
  }
});

export const { setIsNavbarActive, setIsAppLoading } = preferencesSlice.actions;

export default preferencesSlice.reducer;
