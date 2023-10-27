import { ActionTypes } from '../../../contstants';
import api from '../../../../api/api';
import { popularTvShowsURL } from '../../../../api/constants';
import {
  PopularTvShowsFailureAction,
  PopularTvShowsLoadingAction,
  PopularTvShowsSuccessAction,
} from '../../../types/popular/tvShows';
import { Dispatch } from 'redux';
import { MovieAndTvPreview } from '../../../types';
import { formatPopular } from '../../../../utils/formatPopular';

export const fetchPopularTvShowsSuccess = (
  data: MovieAndTvPreview[],
): PopularTvShowsSuccessAction => ({
  type: ActionTypes.FETCH_POPULAR_TVSHOWS_SUCCESS,
  payload: data,
});

export const fetchPopularTvShowsFailure = (error: Error): PopularTvShowsFailureAction => ({
  type: ActionTypes.FETCH_POPULAR_TVSHOWS_FAILURE,
  payload: error,
});

export const fetchPopularTvShowsLoading = (): PopularTvShowsLoadingAction => ({
  type: ActionTypes.FETCH_POPULAR_TVSHOWS_LOADING,
});

export const fetchPopularTvShows = () => {
  return async (dispatch: Dispatch) => {
    dispatch(fetchPopularTvShowsLoading());
    try {
      const response = await api.get(popularTvShowsURL);
      dispatch(fetchPopularTvShowsSuccess(formatPopular(response.data.results)));
    } catch (error) {
      dispatch(fetchPopularTvShowsFailure(error as Error));
    }
  };
};
