import { SuccessAction, FailureAction, LoadingAction, Genre } from '../..';
import { ActionTypes } from '../../../contstants';

export type MovieGenresSuccessAction = SuccessAction<
  typeof ActionTypes.FETCH_MOVIE_GENRES_SUCCESS,
  Genre
>;

export type MovieGenresFailureAction = FailureAction<
  typeof ActionTypes.FETCH_MOVIE_GENRES_FAILURE
>;
export type MovieGenresLoadingAction = LoadingAction<
  typeof ActionTypes.FETCH_MOVIE_GENRES_LOADING
>;

export type MovieGenresAction =
  | MovieGenresSuccessAction
  | MovieGenresFailureAction
  | MovieGenresLoadingAction;
