import { fetchTrendingMovies } from '../redux/actions/trending/movies';
import { useEffect } from 'react';
import { TrendingMovies } from '../components/TrendingMoviesSlider';
import { useDispatch } from 'react-redux';
import { fetchPopularMovies } from '../redux/actions/popular/movies';
import { fetchPopularTvShows } from '../redux/actions/popular/tvShows';
import { PopularMovies } from '../components/PopularMovies';
import { PopularTvShows } from '../components/PopularTvShows';
import { fetchMovieGenres } from '../redux/actions/genres/movies';
import { fetchTvShowGenres } from '../redux/actions/genres/tvShows';
import MovieGenres from '../components/MovieGenres';
import TvShowGenres from '../components/TvShowGenres';

export const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTrendingMovies());
    dispatch(fetchPopularMovies());
    dispatch(fetchPopularTvShows());
    dispatch(fetchMovieGenres());
    dispatch(fetchTvShowGenres());
  }, [dispatch]);

  return (
    <div>
      <TrendingMovies />
      <PopularMovies />
      <PopularTvShows />
      <MovieGenres />
      <TvShowGenres />
    </div>
  );
};
