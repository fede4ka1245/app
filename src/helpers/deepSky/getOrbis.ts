import { StellarObjectType } from '../../models/enums/StellarObjectType';

const getGalaxyOrbis = (planet: string) => {
  if (planet === 'солнце' || planet === 'луна' || planet === 'юпитер' || planet === 'сатурн') {
    return 2 * 60;
  }

  return 1 * 60;
};

const getStarOrbis = (planet: string) => {
  if (planet === 'солнце' || planet === 'луна') {
    return 1 * 60;
  }

  if (planet === 'юпитер' || planet === 'сатурн') {
    return 0.75 * 60;
  }

  return 0.5 * 60;
};

const getNebulaAndStarsOrbis = (planet: string) => {
  if (planet === 'юпитер' || planet === 'сатурн' || planet === 'меркурий' || planet === 'венера' || planet === 'марс' || planet === 'раху' || planet === 'кету') {
    return 1 * 60;
  }

  return 1.5 * 60;
};

const getCloseStarOrbis = (planet: string) => {
  if (planet === 'солнце' || planet === 'луна') {
    return 2 * 60;
  }

  if (planet === 'юпитер' || planet === 'сатурн') {
    return 1.5 * 60;
  }

  return 1 * 60;
};

export const getOrbis = (stellarObjectType: number, planet: string) => {
  const _planet = planet.toLowerCase();

  if (stellarObjectType === StellarObjectType.Star) {
    return getStarOrbis(_planet);
  }

  if (stellarObjectType === StellarObjectType.Galaxy) {
    return getGalaxyOrbis(_planet);
  }

  if (stellarObjectType === StellarObjectType.Nebula || stellarObjectType === StellarObjectType.Stars) {
    return getNebulaAndStarsOrbis(_planet);
  }

  return getCloseStarOrbis(_planet);
};
