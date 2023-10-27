import { ActionTypes } from '../../../contstants';
import {
  TrendingMoviesAction,
  TrendingMoviesSuccessAction,
  TrendingMoviesFailureAction,
} from '../../../types/trending/movies';
import { InitialStateType, MovieBasicInfo } from '../../../types';

const initialState: InitialStateType<MovieBasicInfo> = {
  data: [],
  error: null,
  loading: false,
};

const trendingMoviesReducer = (
  state: InitialStateType<MovieBasicInfo> = initialState,
  action: TrendingMoviesAction,
): InitialStateType<MovieBasicInfo> => {
  switch (action.type) {
    case ActionTypes.FETCH_TRENDING_MOVIES_LOADING:
      return {
        ...state,
        loading: true,
      };
    case ActionTypes.FETCH_TRENDING_MOVIES_SUCCESS:
      return {
        ...state,
        data: (action as TrendingMoviesSuccessAction).payload,
        error: null,
        loading: false,
      };
    case ActionTypes.FETCH_TRENDING_MOVIES_FAILURE:
      return {
        ...state,
        data: [],
        error: (action as TrendingMoviesFailureAction).payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default trendingMoviesReducer;
