import { Swiper, SwiperSlide } from 'swiper/react';
import { useNavigate } from 'react-router-dom';
import styles from './styles.module.css';
import Container from '../Container';
import './styles.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { MovieAndTvPreview } from '../../redux/types';

type Props = {
  data: MovieAndTvPreview[];
  title: string;
  type: 'movie' | 'tv';
};
export const PopularItemsSlider = ({ data, title, type }: Props) => {
  const navigate = useNavigate();

  const swiperBreakpoints = {
    0: {
      slidesPerView: 1,
    },
    1020: {
      slidesPerView: 2,
    },
    1400: {
      slidesPerView: 3,
    },
    1500: {
      slidesPerView: 4,
    },
    1650: {
      slidesPerView: 5,
    },
  };

  if (!data?.length) {
    return null;
  }
  return (
    <Container className={styles.container}>
      <h1>{title}</h1>
      <Swiper
        modules={[Navigation]}
        navigation
        className="popularItemsSwiper"
        slidesPerView={7}
        spaceBetween={1}
        loop
        breakpoints={swiperBreakpoints}
      >
        {data?.map(({ poster_path, id }) => (
          <SwiperSlide
            key={id}
            className={styles.swiperSlide}
            onClick={() => navigate(`/details?id=${id}&type=${type}`)}
          >
            <img src={poster_path} alt={id} className={styles.image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};
