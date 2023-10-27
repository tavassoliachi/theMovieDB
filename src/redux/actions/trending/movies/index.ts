import api from '../../../../api/api';
import { trendingMoviesURL } from '../../../../api/constants';
import { formatTrending } from '../../../../utils/formatTending';
import { ActionTypes } from '../../../contstants';
import { MovieBasicInfo } from '../../../types';
import {
  TrendingMoviesAction,
  TrendingMoviesFailureAction,
  TrendingMoviesLoadingAction,
  TrendingMoviesSuccessAction,
} from '../../../types/trending/movies';
import { Dispatch } from 'redux';

export const fetchTrendingMoviesSuccess = (
  movies: MovieBasicInfo[],
): TrendingMoviesSuccessAction => ({
  type: ActionTypes.FETCH_TRENDING_MOVIES_SUCCESS,
  payload: movies,
});

export const fetchTrendingMoviesFailure = (error: Error): TrendingMoviesFailureAction => ({
  type: ActionTypes.FETCH_TRENDING_MOVIES_FAILURE,
  payload: error,
});

export const fetchTrendingMoviesLoading = (): TrendingMoviesLoadingAction => ({
  type: ActionTypes.FETCH_TRENDING_MOVIES_LOADING,
});

export const fetchTrendingMovies = () => {
  return async (dispatch: Dispatch<TrendingMoviesAction>) => {
    dispatch(fetchTrendingMoviesLoading());
    try {
      const response = await api.get(trendingMoviesURL);
      dispatch(fetchTrendingMoviesSuccess(formatTrending(response.data.results)));
    } catch (error) {
      dispatch(fetchTrendingMoviesFailure(error as Error));
    }
  };
};
