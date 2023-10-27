import { Props } from '.';
import api from '../api/api';
import { formatMovieDetails } from '../utils/formatMovieDetails';

export const fetchMovieDetails = async ({ type, id }: Props) => {
  try {
    const response = await api.get(`/${type}/${id}`);
    return formatMovieDetails(response.data);
  } catch (error) {
    console.error('Error fetching movie data:', error);
    return null;
  }
};
