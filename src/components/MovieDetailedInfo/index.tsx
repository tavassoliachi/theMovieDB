import { FormatedDetails } from '../../types';
import styles from './styles.module.css';

type Props = {
  data: FormatedDetails;
};
const DetailedInfo = ({ data: movieData }: Props) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{movieData?.title}</h1>
      <div className={styles.textCont}>
        <div className={styles.details}>
          {movieData.genres && <p>{movieData.genres}</p>}
          {movieData.runtime && <p>{movieData.runtime}</p>}
          {movieData.releaseDate && <p>{movieData.releaseDate}</p>}
        </div>

        {movieData.productionCompanies && (
          <div>
            <p>Production Countries: {movieData.productionCompanies}</p>
          </div>
        )}
        {movieData.productionCountries && (
          <div>
            <p>Production Companies: {movieData.productionCountries}</p>
          </div>
        )}
        {movieData.language && (
          <div>
            <p>Language: {movieData.language}</p>
          </div>
        )}
      </div>
      <div className={styles.overview}>
        <p className={styles.overview}>{movieData.overview}</p>
      </div>
    </div>
  );
};

export default DetailedInfo;
