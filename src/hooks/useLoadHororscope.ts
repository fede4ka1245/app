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
  setAddressInformation,
  setAshtakavarga,
  setDashiVim, setHoroscopeUserInfo,
  setIsAshtakavargaLoading,
  setIsRashiTableLoading, setIsVimDashiLoading, setMaps, setRashiTable
} from '../store/reducers/horoscopesReducer';
import { getAshtakavarga } from '../api/getAshtakavarga';
import { useAppDispatch } from '../store/store';
import { getRashiTable } from '../api/getRashiTable';
import { LoadHoroscope } from '../models/types/LoadHororscope';
import { getVmdDashi } from '../api/getVmdDashi';

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

      dispatch(setIsRashiTableLoading(true));

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
      }).finally(() => {
        dispatch(setIsRashiTableLoading(false));
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

      dispatch(setIsVimDashiLoading(true));

      getVmdDashi({
        horoscopeData: {
          userName,
          date,
          time,
          latitude: addressInformation?.latitude,
          longitude: addressInformation?.longitude,
          hours,
          greenwich,
          minutes
        }
      }).then((data) => {
        dispatch(setDashiVim(data));
      }).catch((err) => {
        console.log(err);
      }).finally(() => {
        dispatch(setIsVimDashiLoading(false));
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
      dispatch(setAddressInformation(addressInformation));
      dispatch(setMaps(maps));
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setIsAppLoading(false));
    }
  };
};
