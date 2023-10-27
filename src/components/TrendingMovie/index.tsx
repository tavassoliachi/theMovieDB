import { MovieBasicInfo } from '../../redux/types';
import { useNavigate } from 'react-router-dom';
import styles from './styles.module.css';

type Props = MovieBasicInfo & {
  handlePlay: (id: string) => void;
};

export const TrendingMovie = ({ poster_path, title, overview, handlePlay, id }: Props) => {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <img
        src={poster_path}
        alt={title}
        className={styles.image}
        onClick={() => navigate(`/details?id=${id}&type=movie`)}
      />
      <div className={styles.innerCont}>
        <h1 className={styles.title}>{title}</h1>
        <h3 className={styles.overview}>{overview}</h3>
        <button onClick={() => handlePlay(id)} className={styles.button}>
          Play Trailer
        </button>
      </div>
    </div>
  );
};
