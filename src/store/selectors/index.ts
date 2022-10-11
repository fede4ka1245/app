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
