import axios from 'axios';
import { ICourse } from '../models/types/Courses';

export const getCourses = async (params?: object):Promise<ICourse[]> => {
  try {
    const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/bootcamp/courses/`, {
      params
    });

    return data?.results;
  } catch (e) {
    // console.log(e);
    return [];
  };
};
