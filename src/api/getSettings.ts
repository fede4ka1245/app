import authRequest from './authRequest';

interface getSettingsResponse {

}

export const getSettings = () => {
  return authRequest.get(`${process.env.REACT_APP_API_URL}/horoscope/settings/`)
    .then(({ data }) => {
      return data;
    });
};
