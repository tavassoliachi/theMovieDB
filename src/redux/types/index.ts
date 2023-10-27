export type CommonAttributes = {
  original_language: string;
  vote_average: number;
  overview: string;
  poster_path: string;
  production_companies: { name: string }[];
  production_countries: { name: string }[];
  genres: Genre[];
  id: string;
};

export type MovieAndTvPreview = Pick<MovieBasicInfo, 'id' | 'poster_path'>;

export type MovieBasicInfo = Pick<CommonAttributes, 'poster_path' | 'id' | 'overview'> & {
  title: string;
};

export type InitialGenreStateType = InitialStateType<Genre>;

export type InitialStateType<K> = {
  data: K[] | [];
  error: Error | null;
  loading: boolean;
};

export type RootStateType = {
  trending: {
    movies: InitialStateType<MovieBasicInfo>;
  };
  popular: {
    movies: InitialStateType<MovieAndTvPreview>;
    tvShows: InitialStateType<MovieAndTvPreview>;
  };
  genres: {
    movies: InitialGenreStateType;
    tvShows: InitialGenreStateType;
  };
};

export type Genre = {
  id: string;
  name: string;
};

export type SuccessAction<T, P> = {
  type: T;
  payload: P[];
};

export type FailureAction<T> = {
  type: T;
  payload: Error;
};

export type LoadingAction<T> = {
  type: T;
};
