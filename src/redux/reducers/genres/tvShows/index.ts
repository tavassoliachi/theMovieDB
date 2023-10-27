import { ActionTypes } from '../../../contstants';
import { InitialGenreStateType } from '../../../types';
import {
  TvShowGenresAction,
  TvShowGenresFailureAction,
  TvShowGenresSuccessAction,
} from '../../../types/genres/tvShows';

const initialState: InitialGenreStateType = {
  data: [],
  error: null,
  loading: false,
};

const tvShowGenresReducer = (
  state: InitialGenreStateType = initialState,
  action: TvShowGenresAction,
): InitialGenreStateType => {
  switch (action.type) {
    case ActionTypes.FETCH_TVSHOW_GENRES_LOADING:
      return {
        ...state,
        loading: true,
      };
    case ActionTypes.FETCH_TVSHOW_GENRES_SUCCESS:
      return {
        ...state,
        data: (action as TvShowGenresSuccessAction).payload,
        error: null,
        loading: false,
      };
    case ActionTypes.FETCH_TVSHOW_GENRES_FAILURE:
      return {
        ...state,
        data: [],
        error: (action as TvShowGenresFailureAction).payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default tvShowGenresReducer;
