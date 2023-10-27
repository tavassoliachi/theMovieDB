import { combineReducers } from 'redux';
import trendingMoviesReducer from './trending/movies';
import popularMoviesReducer from './popular/movies';
import popularTvShowsReducer from './popular/tvShows';
import movieGenresReducer from './genres/movies';
import tvShowGenresReducer from './genres/tvShows';

const rootReducer = combineReducers({
  trending: combineReducers({
    movies: trendingMoviesReducer,
  }),
  popular: combineReducers({
    movies: popularMoviesReducer,
    tvShows: popularTvShowsReducer,
  }),
  genres: combineReducers({
    movies: movieGenresReducer,
    tvShows: tvShowGenresReducer,
  }),
});

export default rootReducer;
