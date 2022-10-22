import { formatSuggestions } from './formatSuggestions';

const url = 'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address';
const token = 'f3fc0aa05b2d2c55fa822845e788231acdd5ddfd';

export const getSuggestions = (query: string, count = 15) => {
  const options: any = {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: 'Token ' + token
    },
    body: JSON.stringify({ query, count, locations: [{ country: '*' }] })
  };

  return fetch(url, options)
    .then(response => response.text())
    .then(result => {
      return formatSuggestions(JSON.parse(result).suggestions as Array<any>);
    });
};
