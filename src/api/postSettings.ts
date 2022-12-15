import authRequest from './authRequest';
import { Language } from '../models/enums/Language';

interface postSettingsProps {
  language?: Language,
  arudha?: number
}

export const postSettings = (settings: postSettingsProps) => {
  return authRequest.post(`${process.env.REACT_APP_API_URL}/horoscope/settings/`, settings)
    .then(({ data }) => {
      return data;
    });
};
