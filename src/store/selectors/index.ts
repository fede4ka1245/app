import { useAppSelector } from '../store';

export const useGetUserName = () => {
  return useAppSelector((state) => state?.user.name);
};

export const useGetEmail = () => {
  return useAppSelector((state) => state?.user.email);
};

export const useGetBirthday = () => {
  return useAppSelector((state) => state?.user.birthday);
};

export const useGetPhone = () => {
  return useAppSelector((state) => state?.user.phone);
};

export const useGetSecondName = () => {
  return useAppSelector((state) => state?.user.secondName);
};

export const useGetAvatar = () => {
  return useAppSelector((state) => state?.user.avatar);
};

export const useGetIsNavbarActive = () => {
  return useAppSelector((state) => state?.preferences.isNavbarActive);
};

export const useGetIsAppLoading = () => {
  return useAppSelector((state) => state?.preferences.isAppLoading);
};

export const useGetMaps = () => {
  return useAppSelector((state) => state?.horoscopes.maps);
};

export const useGetTargetMapValue = () => {
  return useAppSelector((state) => state?.horoscopes.targetMapValue);
};

export const useGetHoroscopeUserInfo = () => {
  return useAppSelector((state) => state?.horoscopes.horoscopeUserInfo);
};

export const useGetDashiChr = () => {
  return useAppSelector((state) => state?.horoscopes.dashiChr);
};

export const useGetDashiVim = () => {
  return useAppSelector((state) => state?.horoscopes.dashiVim);
};

export const useGetIsDashiLoading = () => {
  return useAppSelector((state) => state?.horoscopes.isDashiLoading);
};

export const useGetAshtakavarga = () => {
  return useAppSelector((state) => state?.horoscopes.ashtakavarga);
};

export const useGetIsAshtakavargaLoading = () => {
  return useAppSelector((state) => state?.horoscopes.isAshtakavargaLoading);
};
