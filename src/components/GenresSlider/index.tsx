import { Genre } from '../../redux/types';
import Container from '../Container';
import styles from './styles.module.css';

type Props = {
  data: Genre[];
};

const GenresSlider = ({ data }: Props) => {
  return (
    <Container>
      <h1 className={styles.title}>Movie Genres</h1>
      <div className={styles.innerCont}>
        {data?.map(({ name, id }) => (
          <div key={id} className={styles.genre}>
            {name}
          </div>
        ))}
      </div>
    </Container>
  );
};

export default GenresSlider;
