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
  setIsDashiLoading, setMaps, setRashiTable
} from '../store/reducers/horoscopesReducer';
import { getDashi } from '../api/getDashi';
import { getAshtakavarga } from '../api/getAshtakavarga';
import { AddressInformation } from '../models/types/AddressInformation';
import { useAppDispatch } from '../store/store';
import { HoroscopeData } from '../models/types/HoroscopeData';
import { TimeZoneData } from '../models/types/TimeZoneData';
import { getRashiTable } from '../api/getRashiTable';

interface LoadHoroscope extends Omit<HoroscopeData, 'latitude' | 'longitude'> {
  addressInformation: AddressInformation
  timeZoneData: TimeZoneData
}

export const useLoadHoroscopes = () => {
  const dispatch = useAppDispatch();

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

      getRashiTable({
        userName,
        date,
        time,
        latitude: addressInformation?.latitude,
        longitude: addressInformation?.longitude,
        hours,
        greenwich,
        minutes
      }).then((result) => {
        dispatch(setRashiTable(result));
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
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setIsAppLoading(false));
    }
  };
};
