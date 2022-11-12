import { routes } from '../routes';
import display from './assets/display.svg';
import settings from './assets/settingsIcon.svg';

export const transparentButtons = [
  {
    route: routes.main,
    imageSource: settings,
    label: 'Основные'
  },
  {
    route: routes.mapDisplaying,
    imageSource: display,
    label: 'Отображение'
  }
];
