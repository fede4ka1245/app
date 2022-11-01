import { setIsAppLoading } from '../store/reducers/preferencesReducer';
import { getMaps } from '../api/getMaps';
import {
  setBhava,
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
import { TimeZoneData } from '../models/types/TimeZoneData';

interface LoadHoroscope extends Omit<HoroscopeData, 'latitude' | 'longitude'> {
  addressInformation: AddressInformation
  timeZoneData: TimeZoneData
}

export const useLoadHoroscopes = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return async ({ userName, date, time, addressInformation, timeZoneData }: LoadHoroscope) => {
    if (!addressInformation?.latitude || !addressInformation?.longitude) {
      return;
    }

    const { hours, greenwich, minutes } = timeZoneData;

    dispatch(setIsAppLoading(true));

    try {
      const maps = await getMaps({
        userName,
        date,
        time,
        latitude: addressInformation?.latitude,
        longitude: addressInformation?.longitude,
        hours,
        greenwich,
        minutes
      });

      dispatch(setIsZonesLoading(true));

      getZones({
        userName,
        date,
        time,
        latitude: addressInformation?.latitude,
        longitude: addressInformation?.longitude,
        hours,
        greenwich,
        minutes
      }).then(({
        savatobhadra,
        compass,
        calanala,
        shani,
        sudarshana,
        bhava
      }) => {
        dispatch(setSavatobhadra(savatobhadra));
        dispatch(setShani(shani));
        dispatch(setCalanala(calanala));
        dispatch(setCompass(compass));
        dispatch(setSudarshana(sudarshana));
        dispatch(setBhava(bhava));
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
        longitude: addressInformation?.longitude,
        hours,
        greenwich,
        minutes
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
        longitude: addressInformation?.longitude,
        hours,
        greenwich,
        minutes
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
        greenwich: timeZoneData.greenwich,
        minutes: timeZoneData.minutes,
        hours: timeZoneData.hours
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
