import { ActionTypes } from '../../../contstants';
import { InitialGenreStateType } from '../../../types';
import {
  MovieGenresAction,
  MovieGenresFailureAction,
  MovieGenresSuccessAction,
} from '../../../types/genres/movies';

const initialState: InitialGenreStateType = {
  data: [],
  error: null,
  loading: false,
};

const movieGenresReducer = (
  state: InitialGenreStateType = initialState,
  action: MovieGenresAction,
): InitialGenreStateType => {
  switch (action.type) {
    case ActionTypes.FETCH_MOVIE_GENRES_LOADING:
      return {
        ...state,
        loading: true,
      };
    case ActionTypes.FETCH_MOVIE_GENRES_SUCCESS:
      return {
        ...state,
        data: (action as MovieGenresSuccessAction).payload,
        error: null,
        loading: false,
      };
    case ActionTypes.FETCH_MOVIE_GENRES_FAILURE:
      return {
        ...state,
        data: [],
        error: (action as MovieGenresFailureAction).payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default movieGenresReducer;
