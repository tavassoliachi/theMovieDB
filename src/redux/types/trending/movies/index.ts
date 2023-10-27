import { SuccessAction, FailureAction, LoadingAction, MovieBasicInfo } from '../..';
import { ActionTypes } from '../../../contstants';

export type TrendingMoviesSuccessAction = SuccessAction<
  typeof ActionTypes.FETCH_TRENDING_MOVIES_SUCCESS,
  MovieBasicInfo
>;
export type TrendingMoviesFailureAction = FailureAction<
  typeof ActionTypes.FETCH_TRENDING_MOVIES_FAILURE
>;
export type TrendingMoviesLoadingAction = LoadingAction<
  typeof ActionTypes.FETCH_TRENDING_MOVIES_LOADING
>;

export type TrendingMoviesAction =
  | TrendingMoviesSuccessAction
  | TrendingMoviesFailureAction
  | TrendingMoviesLoadingAction;
