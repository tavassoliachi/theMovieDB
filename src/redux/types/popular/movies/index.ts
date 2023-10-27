import { SuccessAction, FailureAction, LoadingAction, MovieAndTvPreview } from '../..';
import { ActionTypes } from '../../../contstants';

export type PopularMoviesSuccessAction = SuccessAction<
  typeof ActionTypes.FETCH_POPULAR_MOVIES_SUCCESS,
  MovieAndTvPreview
>;

export type PopularMoviesFailureAction = FailureAction<
  typeof ActionTypes.FETCH_POPULAR_MOVIES_FAILURE
>;
export type PopularMoviesLoadingAction = LoadingAction<
  typeof ActionTypes.FETCH_POPULAR_MOVIES_LOADING
>;

export type PopularMoviesAction =
  | PopularMoviesSuccessAction
  | PopularMoviesFailureAction
  | PopularMoviesLoadingAction;
