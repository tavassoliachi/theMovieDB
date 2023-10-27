import React from 'react';
import styles from './styles.module.css';
import { IMAGE_PATH } from '../../constants';
import { MovieAndTvPreview } from '../../redux/types';

type Props = {
  heading: string;
  data: MovieAndTvPreview[];
  type: 'tv' | 'movie';
};

const SearchResults = ({ data, heading, type }: Props) => {
  if (data.length < 1) {
    return null;
  }
  return (
    <div className={styles.dataWrapper}>
      <h1 className={styles.heading}>{heading}</h1>
      <div className={styles.resultWrapper}>
        {data.map(({ poster_path, id }, index) => (
          <div
            key={index}
            className={styles.dataItem}
            onClick={() => (window.location.href = `/details?id=${id}&type=${type}`)}
          >
            <img src={IMAGE_PATH + poster_path} alt={`${heading}-${type}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
