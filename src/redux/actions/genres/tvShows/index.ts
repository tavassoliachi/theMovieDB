import { ActionTypes } from '../../../contstants';
import api from '../../../../api/api';
import { tvShowGenresURL } from '../../../../api/constants';
import { Genre } from '../../../types';
import { Dispatch } from 'redux';
import {
  TvShowGenresFailureAction,
  TvShowGenresLoadingAction,
} from '../../../types/genres/tvShows';

export const fetchTvShowGenresSuccess = (genres: Genre[]) => ({
  type: ActionTypes.FETCH_TVSHOW_GENRES_SUCCESS,
  payload: genres,
});

export const fetchTvShowGenresFailure = (error: Error): TvShowGenresFailureAction => ({
  type: ActionTypes.FETCH_TVSHOW_GENRES_LOADING,
  payload: error,
});

export const fetchTvShowGenresLoading = (): TvShowGenresLoadingAction => ({
  type: ActionTypes.FETCH_TVSHOW_GENRES_LOADING,
});

export const fetchTvShowGenres = () => {
  return async (dispatch: Dispatch) => {
    dispatch(fetchTvShowGenresLoading());
    try {
      const response = await api.get(tvShowGenresURL);
      dispatch(fetchTvShowGenresSuccess(response.data.genres));
    } catch (error) {
      dispatch(fetchTvShowGenresFailure(error as Error));
    }
  };
};
