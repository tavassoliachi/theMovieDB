import api from '../api/api';
import { MOVIE_SEARCH, TVSHOW_SEARCH } from '../constants';
import { MovieAndTvPreview } from '../redux/types';

type Props = {
  keyword: string;
};
const extractMovieData = (data: MovieAndTvPreview[]) =>
  data.filter((e) => !!e.poster_path).slice(0, 10);

export const fetchSearchResults = async ({ keyword }: Props) => {
  const [movieRes, tvShowRes] = await Promise.allSettled([
    api.get(`${MOVIE_SEARCH}${keyword}`),
    api.get(`${TVSHOW_SEARCH}${keyword}`),
  ]);
  if (tvShowRes.status !== 'fulfilled' && movieRes.status !== 'fulfilled') {
    throw new Error('Failed to fetch data');
  }

  const movies = extractMovieData(
    movieRes.status === 'fulfilled' ? movieRes.value.data.results : [],
  );
  const tvShows = extractMovieData(
    tvShowRes.status === 'fulfilled' ? tvShowRes.value.data.results : [],
  );

  return { movies, tvShows };
};
