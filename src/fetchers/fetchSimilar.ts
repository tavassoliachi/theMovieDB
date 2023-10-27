import { Props } from '.';
import api from '../api/api';
import { formatPopular } from '../utils/formatPopular';

export const fetchSimilar = async ({ type, id }: Props) => {
  try {
    const response = await api.get(`/${type}/${id}/similar`);
    return formatPopular(response.data.results);
  } catch (error) {
    console.error('Error fetching movie data:', error);
  }
};
