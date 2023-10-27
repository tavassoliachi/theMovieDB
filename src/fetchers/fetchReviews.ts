import { Props } from '.';
import api from '../api/api';
import { formatReviews } from '../utils/formatReviews';

export const fetchReviews = async ({ type, id }: Props) => {
  try {
    const response = await api.get(`/${type}/${id}/reviews`);
    return formatReviews(response.data.results);
  } catch (error) {
    console.error('Error fetching movie data:', error);
  }
};
