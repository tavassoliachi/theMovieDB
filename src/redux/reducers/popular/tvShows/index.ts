import { ActionTypes } from '../../../contstants';
import { InitialStateType, MovieAndTvPreview } from '../../../types';
import {
  PopularTvShowsAction,
  PopularTvShowsFailureAction,
  PopularTvShowsSuccessAction,
} from '../../../types/popular/tvShows';

const initialState: InitialStateType<MovieAndTvPreview> = {
  data: [],
  error: null,
  loading: false,
};

const popularTvShowsReducer = (
  state: InitialStateType<MovieAndTvPreview> = initialState,
  action: PopularTvShowsAction,
) => {
  switch (action.type) {
    case ActionTypes.FETCH_POPULAR_TVSHOWS_LOADING:
      return {
        ...state,
        loading: true,
      };
    case ActionTypes.FETCH_POPULAR_TVSHOWS_SUCCESS:
      return {
        ...state,
        data: (action as PopularTvShowsSuccessAction).payload,
        error: null,
        loading: false,
      };
    case ActionTypes.FETCH_POPULAR_TVSHOWS_FAILURE:
      return {
        ...state,
        data: [],
        error: (action as PopularTvShowsFailureAction).payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default popularTvShowsReducer;
