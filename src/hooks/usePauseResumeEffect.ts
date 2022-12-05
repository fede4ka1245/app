import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { App } from '@capacitor/app';
import { LocalStorageKey } from '../models/enums/LocalStorageKey';

export const usePauseResumeEffect = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem(LocalStorageKey.restoredPathname, pathname);
  }, [pathname]);

  useEffect(() => {
    App.addListener('appStateChange', ({ isActive }) => {
      if (isActive) {
        navigate(localStorage.getItem(LocalStorageKey.restoredPathname) || '');
      }
    });
  }, []);
};
