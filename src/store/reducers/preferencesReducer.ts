import { createSlice } from '@reduxjs/toolkit';

interface preferencesState {
  isNavbarActive: boolean
}

export const preferencesSlice = createSlice({
  name: 'app',
  initialState: {
    isNavbarActive: true
  },
  reducers: {
    setIsNavbarActive: (state, action) => {
      state.isNavbarActive = action.payload;
    }
  }
});

export const { setIsNavbarActive } = preferencesSlice.actions;

export default preferencesSlice.reducer;
