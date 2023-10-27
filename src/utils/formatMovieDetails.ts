import { IMAGE_PATH } from '../constants';
import noIMG from '../assets/images/noImage.jpg';
import { TvDetails, MovieDetails, FormatedDetails } from '../types';

export const formatMovieDetails = (data: TvDetails | MovieDetails): FormatedDetails => {
  const movieData = data as MovieDetails;
  const tvData = data as TvDetails;
  return {
    title: movieData.title || tvData.name,
    releaseDate:
      movieData.release_date || tvData.first_air_date
        ? new Date(movieData.release_date || tvData.first_air_date).toLocaleDateString()
        : null,
    image: data.poster_path ? IMAGE_PATH + data.poster_path : noIMG,
    runtime: movieData.runtime
      ? `${movieData.runtime} Minutes`
      : `Seasons ${tvData.number_of_seasons}, Episodes ${tvData.number_of_episodes}`,
    genres: data.genres.map(({ name }) => name).join(','),
    language: data.original_language.toUpperCase(),
    productionCompanies: data.production_companies.map(({ name }) => name).join(','),
    productionCountries: data.production_countries.map(({ name }) => name).join(','),
    overview: data.overview,
    rating: data.vote_average.toFixed(1),
    id: data.id,
  };
};
