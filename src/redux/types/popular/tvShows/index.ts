import { SuccessAction, FailureAction, LoadingAction, MovieAndTvPreview } from '../..';
import { ActionTypes } from '../../../contstants';

export type PopularTvShowsSuccessAction = SuccessAction<
  typeof ActionTypes.FETCH_POPULAR_TVSHOWS_SUCCESS,
  MovieAndTvPreview
>;

export type PopularTvShowsFailureAction = FailureAction<
  typeof ActionTypes.FETCH_POPULAR_TVSHOWS_FAILURE
>;
export type PopularTvShowsLoadingAction = LoadingAction<
  typeof ActionTypes.FETCH_POPULAR_TVSHOWS_LOADING
>;

export type PopularTvShowsAction =
  | PopularTvShowsSuccessAction
  | PopularTvShowsFailureAction
  | PopularTvShowsLoadingAction;
