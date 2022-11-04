import { formatSuggestions } from './formatSuggestions';
import { getGreenwichFromSign } from '../getGreenwichFromSign';
import { TimeZoneData } from '../../models/types/TimeZoneData';
import axios from 'axios';

const url = 'https://j108.ru/atlas';
const token = 'e2225e00a5ab3e3fd2e2855b86e2a1bb%241';

export const getSuggestions = (query: string, count = 15) => {
  const options = {
    url: `${url}/location?token=${token}&q=${query}&lang=ru`
  };

  return axios.post('https://backm.alpha-astro.ru/horoscope/get-proxy/', options)
    .then(({ data }) => {
      return formatSuggestions(data.data.result).slice(0, count);
    });
};

export const getTimeZoneOffset = async (query: string, date: string, time: string): Promise<TimeZoneData> => {
  const options = {
    url: `${url}/timezone?token=${token}&q=${query}&dt=${date}%20${time}&lang=ru`
  };

  const response = await axios.post('https://backm.alpha-astro.ru/horoscope/get-proxy/', options)
    .then(({ data }) => {
      return data.data.result[0];
    });

  return {
    greenwich: getGreenwichFromSign(response?.z) as string,
    minutes: response?.i,
    hours: response?.h
  };
};
