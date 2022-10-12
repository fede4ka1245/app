import { useAppDispatch } from '../store/store';
import { setIsNavbarActive } from '../store/reducers/preferencesReducer';
import { useEffect } from 'react';
import { useGetIsNavbarActive } from '../store/selectors';

export const useHideNavbar = () => {
  const dispatch = useAppDispatch();
  const isNavbarActive = useGetIsNavbarActive();

  useEffect(() => {
    dispatch(setIsNavbarActive(false));

    return () => {
      dispatch(setIsNavbarActive(true));
    };
  }, [isNavbarActive]);
};
