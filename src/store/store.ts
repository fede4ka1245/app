import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import userReducer from './reducers/userReducer';
import preferencesReducer from './reducers/preferencesReducer';
import horoscopesReducer from './reducers/horoscopesReducer';
import varshpahalaReducer from './reducers/varshpahalaReducer';
import zonesReducer from './reducers/zonesReducer';
import transitionReduser from './reducers/transitionReduser';
import settingsReducer from './reducers/settingsReducer';
import savedHoroscopesReducer from './reducers/savedHoroscopesReducer';
import { persistStore, persistReducer } from 'redux-persist';
import deepSkyReducer from './reducers/deepSkyReducer';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
  user: userReducer,
  preferences: preferencesReducer,
  horoscopes: horoscopesReducer,
  varshpahala: varshpahalaReducer,
  zones: zonesReducer,
  transition: transitionReduser,
  settings: settingsReducer,
  deepSky: deepSkyReducer,
  savedHoroscopes: savedHoroscopesReducer
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['settings', 'user', 'savedHoroscopes', 'transition', 'deepSky', 'zones', 'varshpahala', 'horoscopes']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer
});

export const persister = persistStore(store);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
