import { formatSuggestions } from './formatSuggestions';
import { Http } from '@capacitor-community/http';
import { getGreenwichFromSign } from '../getGreenwichFromSign';
import { TimeZoneData } from '../../models/types/TimeZoneData';

const url = 'https://j108.ru/atlas';
const token = 'e2225e00a5ab3e3fd2e2855b86e2a1bb%241';

export const getSuggestions = (query: string, count = 15) => {
  const options = {
    url: `${url}/location?token=${token}&q=${query}&lang=ru`
  };

  return Http.get(options)
    .then(response => {
      return formatSuggestions(JSON.parse(response.data)?.result).slice(0, count);
    });
};

export const getTimeZoneOffset = async (query: string, date: string, time: string): Promise<TimeZoneData> => {
  const options = {
    url: `${url}/timezone?token=${token}&q=${query}&dt=${date} ${time}&lang=ru`
  };

  const response = JSON.parse((await Http.get(options)).data).result[0];

  return {
    greenwich: getGreenwichFromSign(response?.z) as string,
    minutes: response?.i,
    hours: response?.h
  };
};
