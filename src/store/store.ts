import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import userReducer from './reducers/userReducer';
import preferencesReducer from './reducers/preferencesReducer';
import horoscopesReducer from './reducers/horoscopesReducer';
import varshpahalaReducer from './reducers/varshpahalaReducer';
import zonesReducer from './reducers/zonesReducer';
import transitionReduser from './reducers/transitionReduser';

export const store = configureStore({
  reducer: {
    user: userReducer,
    preferences: preferencesReducer,
    horoscopes: horoscopesReducer,
    varshpahala: varshpahalaReducer,
    zones: zonesReducer,
    transition: transitionReduser
  }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
