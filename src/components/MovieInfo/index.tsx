import React, { useEffect, useState } from 'react';
import { fetchActors } from '../../fetchers/fetchActors';
import { fetchMovieDetails } from '../../fetchers/fetchMovieDetails';
import { fetchReviews } from '../../fetchers/fetchReviews';
import { fetchSimilar } from '../../fetchers/fetchSimilar';
import { FormatedDetails, FormattedActor, FormattedReview } from '../../types';
import DetailedInfo from '../MovieDetailedInfo';
import Similars from '../SimilarsSlider';
import styles from './styles.module.css';
import ActorsSlider from '../ActorsSlider';
import { useLocation } from 'react-router-dom';
import { MovieAndTvPreview } from '../../redux/types';
import Reviews from '../ReviewsPaginated';
import { CircularProgress } from '@mui/material';

const MovieInfo = () => {
  const containerStyle: React.CSSProperties = {
    color: '#fff',
    backgroundImage: `linear-gradient(rgba(23, 29, 34, 0.9), rgba(23, 29, 34, 1)), url(${require('../../assets/images/moviesBackground.jpg')})`,
  };

  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [movieData, setMovieData] = useState<FormatedDetails | null>(null);
  const [actors, setActors] = useState<FormattedActor[]>([]);
  const [reviews, setReviews] = useState<FormattedReview[]>([]);
  const [similar, setSimilar] = useState<MovieAndTvPreview[]>([]);

  const params = new URLSearchParams(location.search);
  const id: string | null = params.get('id');
  const type: string | null = params.get('type');

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchData = async () => {
      if (id && (type === 'movie' || type === 'tv')) {
        setLoading(true);
        const [reviewData, movieDetailsData, actorsData, similarData] = await Promise.allSettled([
          fetchReviews({ id, type }),
          fetchMovieDetails({ id, type }),
          fetchActors({ id, type }),
          fetchSimilar({ id, type }),
        ]);
        if (movieDetailsData.status !== 'fulfilled') {
          setLoading(false);
          return;
        }
        setReviews(
          reviewData.status === 'fulfilled' ? (reviewData.value as FormattedReview[]) : [],
        );
        setMovieData(movieDetailsData.status === 'fulfilled' ? movieDetailsData.value : null);
        setActors(actorsData.status === 'fulfilled' ? (actorsData.value as FormattedActor[]) : []);
        setSimilar(
          similarData.status === 'fulfilled' ? (similarData.value as MovieAndTvPreview[]) : [],
        );
        setLoading(false);
      }
    };
    fetchData();
  }, [id, type]);

  if (loading) {
    return <CircularProgress size={50} />;
  }
  if (!movieData || !id || (type !== 'movie' && type !== 'tv')) {
    return null;
  }
  return (
    <div className={styles.container}>
      <div style={containerStyle} className={styles.innerCont}>
        <div className={styles.posterCont}>
          <img src={movieData.image} alt="Movie Poster" className={styles.image} />
          <div className={styles.rating}>{movieData.rating}</div>
        </div>
        <div className={styles.texts}>
          <DetailedInfo data={movieData} />
        </div>
      </div>
      <ActorsSlider data={actors} />
      <div>
        <Similars data={similar} type={type} />
        <Reviews data={reviews} />
      </div>
    </div>
  );
};

export default MovieInfo;
