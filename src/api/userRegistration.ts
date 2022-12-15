import axios from 'axios';

interface userRegistrationProps {
  name: string,
  phone: string,
  password: string,
  confirmedPassword: string
}

export const userRegistration = ({ name, phone, password, confirmedPassword }: userRegistrationProps) => {
  return axios.post(`${process.env.REACT_APP_API_URL}/users/registration/`, {
    nickname: name,
    phone_number: phone,
    password,
    confirm_password: confirmedPassword
  });
};
