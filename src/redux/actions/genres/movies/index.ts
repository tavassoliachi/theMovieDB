import { ActionTypes } from '../../../contstants';
import api from '../../../../api/api';
import { movieGenresURL } from '../../../../api/constants';
import { Genre } from '../../../types';
import { Dispatch } from 'redux';
import {
  MovieGenresFailureAction,
  MovieGenresLoadingAction,
} from '../../../types/genres/movies';

export const fetchMovieGenresSuccess = (genres: Genre[]) => ({
  type: ActionTypes.FETCH_MOVIE_GENRES_SUCCESS,
  payload: genres,
});

export const fetchMovieGenresFailure = (
  error: Error,
): MovieGenresFailureAction => ({
  type: ActionTypes.FETCH_MOVIE_GENRES_FAILURE,
  payload: error,
});

export const fetchMovieGenresLoading = (): MovieGenresLoadingAction => ({
  type: ActionTypes.FETCH_MOVIE_GENRES_LOADING,
});

export const fetchMovieGenres = () => {
  return async (dispatch: Dispatch) => {
    dispatch(fetchMovieGenresLoading());
    try {
      const response = await api.get(movieGenresURL);
      dispatch(fetchMovieGenresSuccess(response.data.genres));
    } catch (error) {
      dispatch(fetchMovieGenresFailure(error as Error));
    }
  };
};
