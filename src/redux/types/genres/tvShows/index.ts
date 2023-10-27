import { SuccessAction, FailureAction, LoadingAction, Genre } from '../..';
import { ActionTypes } from '../../../contstants';

export type TvShowGenresSuccessAction = SuccessAction<
  typeof ActionTypes.FETCH_TVSHOW_GENRES_SUCCESS,
  Genre
>;

export type TvShowGenresFailureAction = FailureAction<
  typeof ActionTypes.FETCH_TVSHOW_GENRES_FAILURE
>;
export type TvShowGenresLoadingAction = LoadingAction<
  typeof ActionTypes.FETCH_TVSHOW_GENRES_LOADING
>;

export type TvShowGenresAction =
  | TvShowGenresSuccessAction
  | TvShowGenresFailureAction
  | TvShowGenresLoadingAction;
