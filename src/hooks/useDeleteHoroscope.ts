import { SavedHoroscope } from '../models/types/SavedHoroscopes';
import { useGetSavedHoroscopes } from '../store/selectors';
import lodash from 'lodash';
import { useAppDispatch } from '../store/store';
import { setSavedHoroscopes } from '../store/reducers/savedHoroscopesReducer';

export const useDeleteHoroscope = () => {
  const horoscopes = useGetSavedHoroscopes();
  const dispatch = useAppDispatch();

  return (horoscope: SavedHoroscope) => {
    const _horoscopes = [...horoscopes].filter((savedHoroscope) => {
      return !lodash.isEqual(horoscope, savedHoroscope);
    });

    dispatch(setSavedHoroscopes(_horoscopes));
  };
};
