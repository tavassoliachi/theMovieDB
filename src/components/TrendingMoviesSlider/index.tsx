import { useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import api from '../../api/api';
import { useState } from 'react';
import { TrendingMovie } from '../TrendingMovie';
import { TrailerModal } from '../TrailerModal';
import { RootStateType } from '../../redux/types';
import styles from './styles.module.css';
import 'swiper/css';
import 'swiper/css/navigation';
import './styles.css';
import { Navigation } from 'swiper/modules';
import { CircularProgress } from '@mui/material';

export const TrendingMovies = () => {
  const { data, loading } = useSelector((state: RootStateType) => state.trending.movies);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [trailerUrl, setTrailerUrl] = useState('');

  const openModal = (trailerUrl: string) => {
    setTrailerUrl(trailerUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setTrailerUrl('');
    setIsModalOpen(false);
  };

  const handlePlay = async (id: string) => {
    const res = await api.get(`movie/${id}/videos`);
    const url = res?.data?.results[0].key;
    openModal(url);
  };

  if (loading) {
    return <CircularProgress size={50} />;
  } else if (data.length < 1) {
    return null;
  }

  return (
    <div
      className={styles.container}
      style={{
        backgroundImage: `linear-gradient(rgba(23, 29, 34, 0.9), rgba(23, 29, 34, 1)), url(${require('../../assets/images/moviesBackground.jpg')})`,
      }}
    >
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        navigation
        loop
        scrollbar={{ draggable: true }}
        modules={[Navigation]}
        className={'trendingMovieSwiper'}
      >
        {data?.map((data) => (
          <SwiperSlide key={data.id} className={styles.swiperSlide}>
            <TrendingMovie handlePlay={handlePlay} {...data} />
          </SwiperSlide>
        ))}
      </Swiper>
      <TrailerModal isModalOpen={isModalOpen} closeModal={closeModal} trailerUrl={trailerUrl} />
    </div>
  );
};
