import { ActionTypes } from '../../../contstants';
import { InitialStateType } from '../../../types';
import {
  PopularMoviesAction,
  PopularMoviesFailureAction,
  PopularMoviesSuccessAction,
} from '../../../types/popular/movies';
import { MovieAndTvPreview } from '../../../types';

const initialState: InitialStateType<MovieAndTvPreview> = {
  data: [],
  error: null,
  loading: false,
};

const popularMoviesReducer = (
  state: InitialStateType<MovieAndTvPreview> = initialState,
  action: PopularMoviesAction,
) => {
  switch (action.type) {
    case ActionTypes.FETCH_POPULAR_MOVIES_LOADING:
      return {
        ...state,
        loading: true,
      };
    case ActionTypes.FETCH_POPULAR_MOVIES_SUCCESS:
      return {
        ...state,
        data: (action as PopularMoviesSuccessAction).payload,
        error: null,
        loading: false,
      };
    case ActionTypes.FETCH_POPULAR_MOVIES_FAILURE:
      return {
        ...state,
        data: [],
        error: (action as PopularMoviesFailureAction).payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default popularMoviesReducer;
