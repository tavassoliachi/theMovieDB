import { ActionTypes } from '../../../contstants';
import api from '../../../../api/api';
import { popularMoviesURL } from '../../../../api/constants';
import {
  PopularMoviesFailureAction,
  PopularMoviesLoadingAction,
  PopularMoviesSuccessAction,
} from '../../../types/popular/movies';
import { Dispatch } from 'redux';
import { MovieAndTvPreview } from '../../../types';
import { formatPopular } from '../../../../utils/formatPopular';

export const fetchPopularMoviesSuccess = (
  movies: MovieAndTvPreview[],
): PopularMoviesSuccessAction => ({
  type: ActionTypes.FETCH_POPULAR_MOVIES_SUCCESS,
  payload: movies,
});

export const fetchPopularMoviesFailure = (error: Error): PopularMoviesFailureAction => ({
  type: ActionTypes.FETCH_POPULAR_MOVIES_FAILURE,
  payload: error,
});

export const fetchPopularMoviesLoading = (): PopularMoviesLoadingAction => ({
  type: ActionTypes.FETCH_POPULAR_MOVIES_LOADING,
});

export const fetchPopularMovies = () => {
  return async (dispatch: Dispatch) => {
    dispatch(fetchPopularMoviesLoading());
    try {
      const response = await api.get(popularMoviesURL);
      dispatch(fetchPopularMoviesSuccess(formatPopular(response.data.results)));
    } catch (error) {
      dispatch(fetchPopularMoviesFailure(error as Error));
    }
  };
};
