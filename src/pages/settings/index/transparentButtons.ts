import { routes } from '../routes';
import display from './assets/display.svg';
import line from './assets/line.svg';
import map from './assets/map.svg';
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
  },
  {
    route: routes.maps,
    imageSource: map,
    label: 'Дробные карты'
  },
  {
    route: routes.lines,
    imageSource: line,
    label: 'Айанамаша'
  }
];
