import { CommonAttributes } from '../redux/types';

export type MovieDetails = CommonAttributes & {
  title: string;
  release_date: string;
  runtime: number;
};
export type TvDetails = CommonAttributes & {
  name: string;
  first_air_date: string;
  number_of_seasons: number;
  number_of_episodes: number;
};

export type FormattedReview = {
  author: string;
  image: string;
  date: string;
  content: string;
  url: string;
  id: string;
};

export type FormatedDetails = Pick<CommonAttributes, 'overview' | 'id'> & {
  title: string;
  releaseDate: string | null;
  genres: string;
  image: string;
  runtime: string;
  language: string;
  productionCountries: string;
  productionCompanies: string;
  rating: string;
};
export type Actor = {
  character: string;
  name: string;
  profile_path: string | null;
};
export type FormattedActor = Pick<Actor, 'name' | 'character'> & {
  profile_path: string;
};

export type Review = {
  author: string;
  author_details: {
    avatar_path: string | null;
  };
  content: string;
  created_at: string;
  id: string;
  url: string;
};
