import { TransitionsTableRow } from '../models/types/TransitionsTableRow';
import { getFormattedDate } from '../helpers/getFormattedDate';
import { TransitionsPlanet } from '../models/types/transitions/transitionsPlanet';
import authRequest from './authRequest';

interface getTransitionsProps {
  dateStart: string,
  dateTo: string,
  planets: TransitionsPlanet [],
  condition: string,
  isRasiMerge: boolean,
  isMovementMerge: boolean,
}

const getFormattedTransitions = (transitions: any): TransitionsTableRow [] => {
  const newTransitions = transitions.map(({ signs, dateEnd, dateStart }: any) => {
    return {
      signs,
      dateStart: getFormattedDate(dateStart),
      dateEnd: getFormattedDate(dateEnd)
    };
  });

  return Array.from(newTransitions);
};

export const getTransitions = async ({
  dateStart,
  dateTo,
  planets,
  isRasiMerge,
  isMovementMerge,
  condition
}: getTransitionsProps): Promise<TransitionsTableRow []> => {
  const { data } = await authRequest.post('https://backm.alpha-astro.ru/horoscope/get-gochara/', {
    'date_from': dateStart.split('.').reverse().join('-'),
    'date_to': dateTo.split('.').reverse().join('-'),
    planets,
    condition,
    isMovementMerge,
    isRasiMerge
  });

  return getFormattedTransitions(data.data) as TransitionsTableRow [];
};
