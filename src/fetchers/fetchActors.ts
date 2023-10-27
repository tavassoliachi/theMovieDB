import { Props } from '.';
import api from '../api/api';
import { formatActors } from '../utils/formatActors';

export const fetchActors = async ({ type, id }: Props) => {
  try {
    const response = await api.get(`/${type}/${id}/credits`);
    return formatActors(response.data.cast);
  } catch (error) {
    console.error('Error fetching movie data:', error);
  }
};
