import { setIsAppLoading } from '../store/reducers/preferencesReducer';
import { getMaps } from '../api/getMaps';
import {
  setCalanala,
  setCompass,
  setIsZonesLoading,
  setSavatobhadra,
  setShani,
  setSudarshana
} from '../store/reducers/zonesReducer';
import { getZones } from '../api/getZones';
import {
  setAshtakavarga,
  setDashiChr,
  setDashiVim, setHoroscopeUserInfo,
  setIsAshtakavargaLoading,
  setIsDashiLoading, setMaps
} from '../store/reducers/horoscopesReducer';
import { getDashi } from '../api/getDashi';
import { getAshtakavarga } from '../api/getAshtakavarga';
import { routes as horoscopesRoutes } from '../pages/horoscopes/routes';
import { AddressInformation } from '../models/types/AddressInformation';
import { useAppDispatch } from '../store/store';
import { useNavigate } from 'react-router-dom';
import { HoroscopeData } from '../models/types/HoroscopeData';

interface LoadHoroscope extends Omit<HoroscopeData, 'latitude' | 'longitude'> {
  addressInformation: AddressInformation
}

export const useLoadHoroscopes = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return async ({ userName, date, time, addressInformation }: LoadHoroscope) => {
    if (!addressInformation?.latitude || !addressInformation?.longitude) {
      return;
    }

    dispatch(setIsAppLoading(true));

    try {
      const maps = await getMaps({
        userName,
        date,
        time,
        latitude: addressInformation?.latitude,
        longitude: addressInformation?.longitude
      });

      dispatch(setIsZonesLoading(true));

      getZones({
        userName,
        date,
        time,
        latitude: addressInformation?.latitude,
        longitude: addressInformation?.longitude
      }).then(({
        savatobhadra,
        compass,
        calanala,
        shani,
        sudarshana
      }) => {
        dispatch(setSavatobhadra(savatobhadra));
        dispatch(setShani(shani));
        dispatch(setCalanala(calanala));
        dispatch(setCompass(compass));
        dispatch(setSudarshana(sudarshana));
      }).catch((err) => {
        console.log(err);
      }).finally(() => {
        dispatch(setIsZonesLoading(false));
      });

      dispatch(setIsDashiLoading(true));

      getDashi({
        userName,
        date,
        time,
        latitude: addressInformation?.latitude,
        longitude: addressInformation?.longitude
      }).then(({
        chr,
        vim
      }) => {
        dispatch(setDashiVim(vim));
        dispatch(setDashiChr(chr));
      }).catch((err) => {
        console.log(err);
      }).finally(() => {
        dispatch(setIsDashiLoading(false));
      });

      dispatch(setIsAshtakavargaLoading(true));

      getAshtakavarga({
        userName,
        date,
        time,
        latitude: addressInformation?.latitude,
        longitude: addressInformation?.longitude
      }).then((ashtakavarga) => {
        dispatch(setAshtakavarga(ashtakavarga));
      }).catch((err) => {
        console.log(err);
      }).finally(() => {
        dispatch(setIsAshtakavargaLoading(false));
      });

      dispatch(setHoroscopeUserInfo({
        userName,
        date,
        time,
        latitude: addressInformation?.latitude,
        longitude: addressInformation?.longitude,
        location: addressInformation?.value,
        timeZoneOffset: addressInformation?.timeZoneOffset
      }));
      dispatch(setMaps(maps));

      navigate(horoscopesRoutes.transitions);
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setIsAppLoading(false));
    }
  };
};
