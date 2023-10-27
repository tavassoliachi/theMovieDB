import { SwiperSlide, Swiper } from 'swiper/react';
import styles from './styles.module.css';
import { FormattedActor } from '../../types';
import Container from '../Container';
import { Navigation } from 'swiper/modules';
import './styles.css';
import Actor from '../Actor';
type Props = {
  data: FormattedActor[];
};

const ActorsSlider = ({ data }: Props) => {
  const swiperBreakpoints = {
    0: {
      slidesPerView: 1,
    },
    1100: {
      slidesPerView: 2,
    },
    1500: {
      slidesPerView: 3,
    },
    1650: {
      slidesPerView: 4,
    },
  };
  if (data.length < 1) {
    return null;
  }
  return (
    <Container>
      <div className={styles.container}>
        <h1>Actors</h1>
        <Swiper
          slidesPerView={5}
          className={`actorsSwiper ${styles.swiper}`}
          loop
          modules={[Navigation]}
          navigation
          breakpoints={swiperBreakpoints}
          spaceBetween={50}
        >
          {data?.map(({ profile_path, character, name }) => (
            <SwiperSlide key={name} className={styles.swiperSlide}>
              <Actor profile_path={profile_path} name={name} character={character} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Container>
  );
};

export default ActorsSlider;
